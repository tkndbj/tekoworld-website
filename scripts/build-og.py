"""Compose public/og.png - the image that shows when the site is shared.

Run with `npm run og`.

Built once and committed rather than rendered per request: a link preview is
fetched by crawlers that will not run our JavaScript, and generating it at build
time would make every build depend on reaching Google Fonts. The two faces are
downloaded on first run and cached in scripts/fonts/, which is gitignored.

The scene comes from src/lib/scenes.ts via dump-scenes.mts, so the card and the
hero on the page can never drift apart.
"""
import json
import os
import subprocess
import sys
import urllib.request

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
FONTS = os.path.join(HERE, "fonts")

W, H = 1200, 630
PAPER = (246, 240, 220)
SKY = (207, 233, 247)
INK = (51, 41, 29)
INK2 = (109, 93, 71)
LEAF = (47, 125, 70)
GLIMMER = (255, 194, 74)

# Google serves TrueType rather than woff2 to a sufficiently old user agent,
# and Pillow can only read the former.
FACES = {
    "Baloo2-800.ttf": "https://fonts.googleapis.com/css2?family=Baloo+2:wght@800",
    "Nunito-700.ttf": "https://fonts.googleapis.com/css2?family=Nunito:wght@700",
}


def font_file(name):
    path = os.path.join(FONTS, name)
    if os.path.isfile(path):
        return path
    os.makedirs(FONTS, exist_ok=True)
    req = urllib.request.Request(FACES[name], headers={"User-Agent": "Mozilla/4.0"})
    css = urllib.request.urlopen(req).read().decode()
    url = css.split("url(", 1)[1].split(")", 1)[0]
    print("fetching", name)
    urllib.request.urlretrieve(url, path)
    return path


def scene_data():
    out = subprocess.run(
        ["node", "--experimental-strip-types", "--no-warnings",
         os.path.join(HERE, "dump-scenes.mts")],
        cwd=ROOT, capture_output=True, text=True,
    )
    if out.returncode:
        sys.exit("dump-scenes failed:\n" + out.stderr)
    return json.loads(out.stdout)


TILE_W = 270
HALF = TILE_W / 2
QUARTER = TILE_W / 4


def iso(r, c):
    return ((c - r) * HALF, (c + r) * QUARTER)


def depth(r, c, layer):
    return round((r + c) * 10 + layer)


def render_scene(scene):
    """Composite the diorama with the same painter's order as Iso.tsx."""
    canvas = Image.new("RGBA", (scene["w"], scene["h"]), (0, 0, 0, 0))
    ox, oy = scene["origin"]["x"], scene["origin"]["y"]

    ordered = []
    for i, pc in enumerate(scene["pieces"]):
        if pc["kind"] == "float":
            z = pc.get("layer", 0)
        else:
            z = depth(pc["r"], pc["c"], pc.get("layer", 0 if pc["kind"] == "tile" else 2))
        ordered.append((z, i, pc))

    for _, _, pc in sorted(ordered, key=lambda t: (t[0], t[1])):
        im = Image.open(os.path.join(ROOT, "public", "art", "tiles", pc["art"] + ".webp"))
        im = im.convert("RGBA")
        s = pc.get("scale", 1)
        sw, sh = max(1, round(im.width * s)), max(1, round(im.height * s))
        if (sw, sh) != im.size:
            im = im.resize((sw, sh), Image.LANCZOS)
        dx, dy = pc.get("dx", 0), pc.get("dy", 0)
        if pc["kind"] == "float":
            left, top = pc["x"], pc["y"]
        else:
            x, y = iso(pc["r"], pc["c"])
            left = ox + x - sw / 2 + dx
            top = oy + y - (QUARTER * s if pc["kind"] == "tile" else sh) + dy
        canvas.alpha_composite(im, (round(left), round(top)))
    return canvas


def main():
    data = scene_data()
    scene = data["heroScene"]

    card = Image.new("RGB", (W, H), PAPER)
    column = Image.new("RGB", (1, H))
    for y in range(H):
        t = min(1.0, y / (H * 0.78))
        column.putpixel((0, y), tuple(round(SKY[i] + (PAPER[i] - SKY[i]) * t) for i in range(3)))
    card.paste(column.resize((W, H)), (0, 0))

    stage = render_scene(scene)

    anchor = data["heroAnchors"]["critter"]
    moss = Image.open(os.path.join(ROOT, "public", "art", "critters", "moss-still.webp"))
    moss = moss.convert("RGBA")
    cx, cy = iso(anchor["r"], anchor["c"])
    stage.alpha_composite(moss, (
        round(scene["origin"]["x"] + cx - moss.width / 2 + anchor["dx"]),
        round(scene["origin"]["y"] + cy - moss.height + anchor["dy"]),
    ))

    sc = 0.52
    stage = stage.resize((round(scene["w"] * sc), round(scene["h"] * sc)), Image.LANCZOS)
    card.paste(stage, (W - stage.width + 40, H - stage.height + 44), stage)

    d = ImageDraw.Draw(card)
    title = ImageFont.truetype(font_file("Baloo2-800.ttf"), 96)
    eyebrow = ImageFont.truetype(font_file("Baloo2-800.ttf"), 25)
    body = ImageFont.truetype(font_file("Nunito-700.ttf"), 30)

    x0, y0 = 74, 150
    d.text((x0, y0 - 58), "TEKOWORLD PRESENTS", font=eyebrow, fill=INK2)
    d.text((x0, y0), "Glimmer", font=title, fill=INK)
    d.text((x0, y0 + 92), "Groove", font=title, fill=LEAF)

    # the same hand-drawn underline the page draws under the word
    uy = y0 + 200
    gw = d.textlength("Groove", font=title)
    d.line([(x0 + 4, uy + 4), (x0 + gw * 0.45, uy - 3), (x0 + gw, uy + 2)],
           fill=GLIMMER, width=9, joint="curve")

    for i, line in enumerate([
        "Turn the conduits. Wake the grove.",
        "A cosy light-puzzle. Free, offline, no forced ads.",
    ]):
        d.text((x0, uy + 40 + i * 42), line, font=body, fill=INK2)

    out = os.path.join(ROOT, "public", "og.png")
    card.save(out, optimize=True)
    print("public/og.png", card.size, os.path.getsize(out) // 1024, "KB")


if __name__ == "__main__":
    main()
