"""Turn the game's source art into the web assets under public/art.

Run with `npm run art`. Reads the CraftPix packs the game itself is built from
and writes trimmed, resized, WebP versions of only the pieces the site uses,
then regenerates src/lib/art.ts with their dimensions.

Flat vector art is written losslessly — it is a few kilobytes either way and
quantising it puts visible steps in the tile shading. The companion sprite
strips are large smooth gradients, so those are lossy WebP: octree quantisation
bands them badly and lossless doubles their size for no visible gain.

The source packs are not in this repository (they are licensed art, and they are
600 MB). Point ART_VILLAGE and ART_2D at your local copies:

    ART_VILLAGE=/path/to/village-assets ART_2D="/path/to/2D ASSETS" npm run art
"""
import glob
import os
import re

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

V = os.environ.get("ART_VILLAGE", "C:/Users/Digikey/Downloads/village-assets") + "/_extracted"
A = os.environ.get("ART_2D", "C:/Users/Digikey/Downloads/2D ASSETS") + "/_extracted"
OUT = os.path.join(ROOT, "public", "art")

DF = f"{V}/craftpix-net-163650-daily-forest-isometric-tileset/png"
RPG = f"{A}/craftpix-199100-cartoon-2d-rpg-game-ui/PNG/Game Icon"

def prep(im, maxdim, trim=True):
    if trim:
        bb = im.getbbox()
        if bb: im = im.crop(bb)
    if max(im.size) > maxdim:
        r = maxdim / max(im.size)
        im = im.resize((max(1,round(im.width*r)), max(1,round(im.height*r))), Image.LANCZOS)
    return im

def save(im, path, quality=None):
    """Flat vector art keeps every colour (lossless); gradient sprites use lossy WebP,
    because octree quantisation bands the smooth shading badly."""
    path = os.path.splitext(path)[0] + ".webp"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if quality is None:
        im.save(path, format="WEBP", lossless=True, method=6)
    else:
        im.save(path, format="WEBP", quality=quality, method=6)
    return os.path.getsize(path)

# ---------- 1. isometric tiles ----------
TILES = {
 1:"grass-a", 2:"grass-b", 3:"grass-c", 4:"grass-d", 5:"grass-e", 6:"soil",
 7:"water-a", 8:"water-b", 9:"water-flat", 10:"water-rock", 11:"pond", 12:"pond-deep",
 13:"water-stone", 14:"sign-skull", 15:"sign-up", 16:"sign-right", 17:"sign-left",
 18:"flag", 19:"stump", 20:"monolith", 21:"duskcap", 22:"bush", 23:"bush-dry",
 24:"bloom", 25:"post", 26:"sprout", 27:"flower-pink", 28:"flower-white",
 29:"pin-heart", 30:"chest", 31:"coins", 32:"coin-bag", 33:"stones", 34:"stone",
 35:"pebble", 36:"tent", 37:"pine-a", 38:"pine-b", 39:"tree", 40:"ladder",
 41:"bridge-a", 42:"bridge-b", 43:"logs",
}
total = 0
for n, name in TILES.items():
    src = f"{DF}/Recurso {n}.png"
    if not os.path.isfile(src): print("MISSING", src); continue
    im = prep(Image.open(src).convert("RGBA"), 384)
    total += save(im, f"{OUT}/tiles/{name}.png")
print(f"tiles: {len(TILES)} -> {total//1024} KB")

# ---------- 2. numbered level tiles ----------
total = 0; n_lv = 0
for i in range(1, 11):
    for src_n, kind in ((33+i, "on"), (53+i, "off")):
        src = f"{DF}/number tiles/Recurso {src_n}.png"
        if not os.path.isfile(src): print("MISSING", src); continue
        im = prep(Image.open(src).convert("RGBA"), 256)
        total += save(im, f"{OUT}/levels/{kind}-{i}.png"); n_lv += 1
print(f"levels: {n_lv} -> {total//1024} KB")

# ---------- 3. cartoon icons ----------
ICONS = {
 "Cartoon RPG UI_Game Icon - Leaf.png":"leaf",
 "Cartoon RPG UI_Game Icon - Life.png":"heart",
 "Cartoon RPG UI_Game Icon - Coin.png":"coin",
 "Cartoon RPG UI_Game Icon - Diamond.png":"gem",
 "Cartoon RPG UI_Game Icon - Wooden Treasure Box.png":"chest",
 "Cartoon RPG UI_Game Icon - Healt Potion.png":"potion",
 "Cartoon RPG UI_Game Icon - Aura Gem.png":"aura",
 "Cartoon RPG UI_Game Icon - Magic.png":"magic",
 "Cartoon RPG UI_Game Icon - Defense.png":"shield",
 "Cartoon RPG UI_Game Icon - Water Gem.png":"water-gem",
 "Cartoon RPG UI_Game Icon - Gold Bag.png":"gold-bag",
 "Cartoon RPG UI_Game Icon - Critical Hit Gem.png":"star-gem",
}
total = 0; n_ic = 0
for fn, name in ICONS.items():
    src = f"{RPG}/{fn}"
    if not os.path.isfile(src): print("MISSING ICON", fn); continue
    im = prep(Image.open(src).convert("RGBA"), 128)
    total += save(im, f"{OUT}/icons/{name}.png"); n_ic += 1
print(f"icons: {n_ic} -> {total//1024} KB")

# ---------- 4. critter idle spritesheets ----------
CRITTERS = {
 "moss":   (f"{A}/craftpix-net-154190-monster-v2-character-sprites/PNG/Monster 3/Idle/*.png", 1),
 "pip":    (f"{A}/craftpix-net-154190-monster-v2-character-sprites/PNG/Monster 4/Idle/*.png", 1),
 "tuffle": (f"{A}/craftpix-net-894353-monster-v4-character-sprites/PNG/Monster 1/Idle/*.png", 1),
 "blink":  (f"{A}/craftpix-net-205925-monster-v3-character-sprites/PNG/Monster 3/Idle/*.png", 1),
 "cap":    (f"{A}/craftpix-net-167954-monster-v1-character-sprites/PNG/MonsterV1/Idle/*.png", 1),
 "yolk":   (f"{A}/craftpix-net-925935-monster-v7-sprite-pack/Png/Mons 2/Idle/*.png", 1),
}
FRAME_H = 150

def frame_key(p):
    import re
    m = re.findall(r"(\d+)(?=\.png$)", os.path.basename(p))
    return int(m[0]) if m else 0

manifest = {}
for name, (pat, step) in CRITTERS.items():
    fs = sorted(glob.glob(pat), key=frame_key)[::step]
    if not fs: print("MISSING CRITTER", name); continue
    ims = [Image.open(f).convert("RGBA") for f in fs]
    # one shared bbox across every frame, or the sprite jitters as it loops
    bb = None
    for im in ims:
        b = im.getbbox()
        if not b: continue
        bb = b if bb is None else (min(bb[0],b[0]), min(bb[1],b[1]), max(bb[2],b[2]), max(bb[3],b[3]))
    ims = [im.crop(bb) for im in ims]
    r = FRAME_H / ims[0].height
    fw, fh = max(1,round(ims[0].width*r)), FRAME_H
    ims = [im.resize((fw,fh), Image.LANCZOS) for im in ims]
    strip = Image.new("RGBA", (fw*len(ims), fh))
    for i,im in enumerate(ims): strip.alpha_composite(im, (i*fw, 0))
    sz = save(strip, f"{OUT}/critters/{name}.png", 88)
    poster = save(ims[0], f"{OUT}/critters/{name}-still.png", 90)
    manifest[name] = dict(frames=len(ims), w=fw, h=fh)
    print(f"  {name}: {len(ims)}f {fw}x{fh} strip={sz//1024}KB still={poster//1024}KB")


# ---------- 5. the dimension manifest the scenes are laid out from ----------
GROUPS = {"tiles": "TileArt", "icons": "IconArt", "levels": "LevelArt"}

DOC = '''/**
 * Intrinsic size of every piece of artwork in `public/art`.
 *
 * GENERATED - do not edit by hand. Rebuild with `npm run art`.
 *
 * The isometric scenes position pieces to the pixel, so they need each sprite's
 * real dimensions at module scope rather than after an image has loaded. Baking
 * them into the bundle also means every `<img>` can carry width and height and
 * reserve its own space, so a diorama never reflows as its tiles arrive.
 */
'''

lines = [DOC]
for folder, typename in GROUPS.items():
    lines.append("export const %s = {" % folder)
    for f in sorted(glob.glob("%s/%s/*.webp" % (OUT, folder))):
        im = Image.open(f)
        name = os.path.basename(f)[:-5]
        lines.append('  "%s": { w: %d, h: %d },' % (name, im.width, im.height))
    lines.append("} as const;\n")
    lines.append("export type %s = keyof typeof %s;\n" % (typename, folder))

lines.append("/** Path to a piece of tile artwork. */")
lines.append("export function tileSrc(name: TileArt) {")
lines.append("  return `/art/tiles/${name}.webp`;")
lines.append("}")

manifest_path = os.path.join(ROOT, "src", "lib", "art.ts")
with open(manifest_path, "w", encoding="utf8") as fh:
    fh.write("\n".join(lines) + "\n")
print("wrote src/lib/art.ts")
