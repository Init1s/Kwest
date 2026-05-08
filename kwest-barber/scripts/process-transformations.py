"""
Bake EXIF orientation into pixels and downscale the transformation
photos. The after photo's source frames the hair against the very top
edge, which left it looking cropped on mobile, so it gets bg-blade
padding baked into the top to a 3:5 aspect ratio. The before photo
already has natural breathing room above the head and is left at its
native ratio — the component anchors with object-bottom so the
remaining letterbox sits above the head, matching where the after's
baked padding lives.
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "public" / "images"
MAX_SIDE = 1600         # cap longest side after rotation
PAD_ASPECT = 3 / 5      # width / height for files that need top padding
BG = (17, 17, 17)       # --color-blade #111111

PAD_TOP = {"mid-fade-after.jpeg"}

for name in ("mid-fade-before.jpeg", "mid-fade-after.jpeg"):
    p = IMG_DIR / name
    img = Image.open(p)
    img = ImageOps.exif_transpose(img).convert("RGB")
    if max(img.size) > MAX_SIDE:
        img.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    if name in PAD_TOP:
        w, h = img.size
        target_h = round(w / PAD_ASPECT)
        if target_h > h:
            canvas = Image.new("RGB", (w, target_h), BG)
            canvas.paste(img, (0, target_h - h))
            img = canvas
    img.save(p, "JPEG", quality=85, optimize=True)
    print(f"{name}: -> {img.size}, {p.stat().st_size} bytes")
