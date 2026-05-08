"""
Generate favicon.ico, icon.png (32), and apple-icon.png (180) from the
transparent logo PNG. Next.js App Router auto-serves any of these named
files placed in src/app/.

The logo's circular layout reads small, but the centerpiece (the orange
clipper + "Kwest" wordmark) gets cramped at 16-32px. We render the full
logo at each size — at 16x16 it'll be a tiny mark; that's fine for the
browser tab.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "kwest-logo.png"
APP = ROOT / "src" / "app"

src = Image.open(SRC).convert("RGBA")

# favicon.ico — multi-resolution
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
src.save(APP / "favicon.ico", format="ICO", sizes=ico_sizes)
print(f"favicon.ico: {(APP / 'favicon.ico').stat().st_size} bytes")

# icon.png — modern browsers prefer this; 32x32 is plenty for tabs
icon = src.resize((32, 32), Image.LANCZOS)
icon.save(APP / "icon.png", optimize=True)
print(f"icon.png: {(APP / 'icon.png').stat().st_size} bytes")

# apple-icon.png — iOS home-screen icon, no transparency allowed
# Composite onto bg-ink so it doesn't render with a white box on iOS
apple = Image.new("RGB", (180, 180), (10, 10, 10))  # --color-ink #0A0A0A
logo_180 = src.resize((180, 180), Image.LANCZOS)
apple.paste(logo_180, (0, 0), logo_180)
apple.save(APP / "apple-icon.png", optimize=True)
print(f"apple-icon.png: {(APP / 'apple-icon.png').stat().st_size} bytes")
