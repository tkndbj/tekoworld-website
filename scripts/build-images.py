"""
Turns the store artwork in GEMFIRE-STORE into the web-sized assets the site ships.

  python scripts/build-images.py "C:/Users/Digikey/Downloads/GEMFIRE-STORE"

The store renders are 2 MB PNGs each; the site serves lossy WebP at the widths the
layout actually uses, plus the two social cards and the touch icon.
"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter

src = sys.argv[1] if len(sys.argv) > 1 else "C:/Users/Digikey/Downloads/GEMFIRE-STORE"
out = os.path.join(os.path.dirname(__file__), "..", "public", "gemfire")
os.makedirs(out, exist_ok=True)

def webp(name, im, q=84):
    p = os.path.join(out, name)
    im.save(p, "WEBP", quality=q, method=6)
    print(name, im.size, os.path.getsize(p) // 1024, "KB")

cover = Image.open(os.path.join(src, "cover.png")).convert("RGB")
webp("cover.webp", cover, 86)
webp("cover-sm.webp", cover.resize((1024, 384), Image.LANCZOS), 82)

for i in (1, 2, 3):
    im = Image.open(os.path.join(src, f"img{i}.png")).convert("RGB")
    webp(f"shot-{i}.webp", im.resize((720, 1280), Image.LANCZOS), 84)

splash = Image.open(os.path.join(src, "splash.png")).convert("RGB")
webp("splash.webp", splash.resize((720, 1280), Image.LANCZOS), 84)

turrets = Image.open(os.path.join(src, "turrets.png")).convert("RGB")
webp("turrets.webp", turrets.resize((900, 900), Image.LANCZOS), 84)

# Social cards: 1200x630. The cover is 8:3, so scale to 630 tall and take the middle,
# which keeps the whole logo plaque in frame.
def og(name, im):
    h = 630
    w = round(im.width * h / im.height)
    s = im.resize((w, h), Image.LANCZOS)
    x = (w - 1200) // 2
    card = s.crop((x, 0, x + 1200, h))
    card.save(os.path.join(os.path.dirname(__file__), "..", "public", name), "JPEG", quality=88, optimize=True)
    print(name, card.size)

og("og-gemfire.jpg", cover)

# Company card: the same art, darkened, with a strap along the bottom for the studio name.
company = cover.copy()
h = 630; w = round(company.width * h / company.height)
company = company.resize((w, h), Image.LANCZOS)
x = (w - 1200) // 2
company = company.crop((x, 0, x + 1200, h)).convert("RGBA")
shade = Image.new("RGBA", company.size, (0, 0, 0, 0))
d = ImageDraw.Draw(shade)
for y in range(630):
    a = int(max(0, (y - 330) / 300) ** 1.4 * 235)
    d.line([(0, y), (1200, y)], fill=(6, 8, 18, a))
company = Image.alpha_composite(company, shade).convert("RGB")
company.save(os.path.join(os.path.dirname(__file__), "..", "public", "og.jpg"), "JPEG", quality=88, optimize=True)
print("og.jpg", company.size)

# Touch icon: 180x180 dark rounded square with the Tekoworld gem mark.
def icon(size, path):
    S = size * 4
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    r = S * 0.22
    d.rounded_rectangle([0, 0, S, S], radius=r, fill=(11, 13, 26, 255))
    # glow
    glow = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([S*0.2, S*0.2, S*0.8, S*0.8], fill=(255, 140, 40, 120))
    glow = glow.filter(ImageFilter.GaussianBlur(S * 0.09))
    im = Image.alpha_composite(im, glow)
    d = ImageDraw.Draw(im)
    # gem: a faceted diamond
    cx, cy = S/2, S*0.52
    top = [(cx - S*0.30, cy - S*0.10), (cx - S*0.15, cy - S*0.28), (cx + S*0.15, cy - S*0.28), (cx + S*0.30, cy - S*0.10)]
    d.polygon(top, fill=(255, 205, 90, 255))
    d.polygon([top[0], top[3], (cx, cy + S*0.30)], fill=(255, 120, 40, 255))
    d.polygon([top[0], (cx - S*0.15, cy - S*0.10), (cx, cy + S*0.30)], fill=(255, 160, 60, 255))
    d.polygon([top[1], top[2], (cx, cy - S*0.10)], fill=(255, 236, 170, 255))
    d.polygon([top[1], (cx - S*0.15, cy - S*0.10), top[0]], fill=(255, 190, 80, 255))
    d.polygon([top[2], (cx + S*0.15, cy - S*0.10), top[3]], fill=(255, 190, 80, 255))
    d.polygon([(cx - S*0.15, cy - S*0.10), (cx, cy - S*0.10), (cx + S*0.15, cy - S*0.10), (cx, cy + S*0.30)], fill=(255, 140, 50, 255))
    im = im.resize((size, size), Image.LANCZOS)
    im.save(path, "PNG", optimize=True)
    print(path, im.size)

icon(180, os.path.join(os.path.dirname(__file__), "..", "src", "app", "apple-icon.png"))
