from pathlib import Path
from PIL import Image, ImageDraw

base_path = Path(__file__).resolve().parents[1] / "public" / "images"
base_path.mkdir(parents=True, exist_ok=True)

images = [
    ("atlas-pro-iptv-4k.webp", (18, 45, 120), (6, 12, 40)),
    ("abonnement-iptv-france.webp", (40, 58, 150), (12, 18, 48)),
    ("installation-smart-tv-4k.webp", (16, 110, 180), (8, 28, 60)),
    ("support-iptv.webp", (95, 55, 190), (28, 18, 60)),
    ("famille-streaming-4k.webp", (25, 90, 255), (10, 25, 55)),
]

width, height = 3840, 2160

for filename, start_color, end_color in images:
    img = Image.new("RGB", (width, height), start_color)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / height
        r = int(start_color[0] * (1 - ratio) + end_color[0] * ratio)
        g = int(start_color[1] * (1 - ratio) + end_color[1] * ratio)
        b = int(start_color[2] * (1 - ratio) + end_color[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    img.save(base_path / filename, "WEBP", quality=90)
