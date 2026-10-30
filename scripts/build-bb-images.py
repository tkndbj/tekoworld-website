"""
Turns the Balance Buddies store artwork into the web-sized assets the site ships.

  python scripts/build-bb-images.py "C:/Users/Digikey/Downloads"

Expects, inside that folder: balancebuddiesbanner.png (key art), store-images/ (the
seven phone screenshots, in listing order), hintads.png and noads.png (shop icons) and
monster_icon_blue_outline_500.png (the app icon buddy). Writes lossy WebP at the widths
the layout uses to public/balance-buddies/, and the social card to public/.
"""
import glob, os, sys
from PIL import Image

src = sys.argv[1] if len(sys.argv) > 1 else "C:/Users/Digikey/Downloads"
root = os.path.join(os.path.dirname(__file__), "..", "public")
out = os.path.join(root, "balance-buddies")
os.makedirs(out, exist_ok=True)

def webp(name, im, q=84):
    p = os.path.join(out, name)
    im.save(p, "WEBP", quality=q, method=6)
    print(name, im.size, os.path.getsize(p) // 1024, "KB")

def fit_width(im, w):
    return im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)

banner = Image.open(os.path.join(src, "balancebuddiesbanner.png")).convert("RGB")
webp("banner.webp", fit_width(banner, 1600), 86)
webp("banner-sm.webp", fit_width(banner, 900), 82)

# The listing screenshots are 1080x2340; the site shows them at most ~20rem wide.
shots = sorted(glob.glob(os.path.join(src, "store-images", "*")))
if len(shots) != 7:
    sys.exit(f"expected 7 screenshots in store-images, found {len(shots)}")
for i, path in enumerate(shots, 1):
    webp(f"shot-{i}.webp", fit_width(Image.open(path).convert("RGB"), 600), 82)

# Shop icons keep their transparency.
for name, file in (("hint", "hintads.png"), ("no-ads", "noads.png")):
    webp(f"icon-{name}.webp", Image.open(os.path.join(src, file)).convert("RGBA").resize((384, 384), Image.LANCZOS), 86)

webp("buddy.webp", Image.open(os.path.join(src, "monster_icon_blue_outline_500.png")).convert("RGB").resize((256, 256), Image.LANCZOS), 86)

# Social card 1200x630: the banner is wider than tall but narrower than 1.9:1, so scale
# to 1200 wide and take the middle band, which keeps the buddies and the logo in frame.
s = fit_width(banner, 1200)
y = (s.height - 630) // 2
card = s.crop((0, y, 1200, y + 630))
card.save(os.path.join(root, "og-balance-buddies.jpg"), "JPEG", quality=88, optimize=True)
print("og-balance-buddies.jpg", card.size)
