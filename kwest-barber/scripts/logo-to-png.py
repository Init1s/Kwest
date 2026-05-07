"""
One-shot: convert the brand logo JPEG to a transparent PNG by treating
near-black pixels as alpha. The JPEG has a solid black background with
JPEG noise around the edges, so we use a soft luminance threshold:
fully transparent below `dark`, fully opaque above `light`, linear ramp
in between. This avoids the ringing artifacts a hard cutoff would leave.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "kwest-logo.jpeg"
DST = ROOT / "public" / "images" / "kwest-logo.png"

DARK = 28    # luminance <= DARK -> fully transparent
LIGHT = 80   # luminance >= LIGHT -> fully opaque
MAX_SIDE = 512  # downscale; logo is rendered at most ~112px (so 2x retina = 224px)

img = Image.open(SRC).convert("RGB")
if max(img.size) > MAX_SIDE:
    img.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
w, h = img.size
out = Image.new("RGBA", (w, h))
src = img.load()
dst = out.load()

for y in range(h):
    for x in range(w):
        r, g, b = src[x, y]
        lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
        if lum <= DARK:
            dst[x, y] = (0, 0, 0, 0)
        elif lum >= LIGHT:
            dst[x, y] = (r, g, b, 255)
        else:
            a = int(255 * (lum - DARK) / (LIGHT - DARK))
            dst[x, y] = (r, g, b, a)

out.save(DST, optimize=True)
print(f"wrote {DST.relative_to(ROOT)} ({DST.stat().st_size} bytes)")
