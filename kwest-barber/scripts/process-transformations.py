"""
Bake EXIF orientation into pixels and downscale the before/after photos.
Mobile browsers (esp. iOS Safari in static-export contexts) don't always
honor EXIF orientation, which leaves the after photo looking cropped.
ImageOps.exif_transpose applies the rotation and clears the orientation
tag so every browser sees the same upright JPEG.
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "public" / "images"
MAX_SIDE = 1600  # plenty for retina at the rendered size

for name in ("mid-fade-before.jpeg", "mid-fade-after.jpeg"):
    p = IMG_DIR / name
    img = Image.open(p)
    img = ImageOps.exif_transpose(img)
    if max(img.size) > MAX_SIDE:
        img.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    img.convert("RGB").save(p, "JPEG", quality=85, optimize=True)
    print(f"{name}: -> {img.size}, {p.stat().st_size} bytes")
