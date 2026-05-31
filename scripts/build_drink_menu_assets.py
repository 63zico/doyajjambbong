from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
EXTRACTED = ROOT / "tmp" / "drink-menu-source" / "extracted" / "menu-doyaq1"
DRINKS = ROOT / "public" / "images" / "menu" / "drinks"
OUT = DRINKS / "styled"
SIZE = (1200, 900)


def beige_background() -> Image.Image:
    base = Image.new("RGB", SIZE, "#f4eadb")
    draw = ImageDraw.Draw(base, "RGBA")
    for x in range(0, SIZE[0], 46):
        draw.line((x, 0, x, SIZE[1]), fill=(210, 185, 145, 34), width=1)
    for y in range(0, SIZE[1], 46):
        draw.line((0, y, SIZE[0], y), fill=(210, 185, 145, 26), width=1)
    draw.ellipse((180, 650, 1020, 840), fill=(80, 45, 22, 30))
    return base


def load(path: Path) -> Image.Image:
    return Image.open(path).convert("RGBA")


def remove_white(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    pixels = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r > 244 and g > 244 and b > 244:
                pixels[x, y] = (r, g, b, 0)
            elif r > 232 and g > 232 and b > 232:
                pixels[x, y] = (r, g, b, int(a * 0.32))
    return rgba


def trim_alpha(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def paste_with_shadow(canvas: Image.Image, item: Image.Image, max_w: int, max_h: int, y_offset: int = 8) -> Image.Image:
    item = trim_alpha(item)
    scale = min(max_w / item.width, max_h / item.height)
    item = item.resize((max(1, int(item.width * scale)), max(1, int(item.height * scale))), Image.LANCZOS)
    x = (SIZE[0] - item.width) // 2
    y = (SIZE[1] - item.height) // 2 + y_offset

    shadow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    mask = item.getchannel("A").filter(ImageFilter.GaussianBlur(18))
    shadow_layer = Image.new("RGBA", item.size, (55, 35, 20, 90))
    shadow.paste(shadow_layer, (x + 22, y + 32), mask)

    result = canvas.convert("RGBA")
    result.alpha_composite(shadow)
    result.alpha_composite(item, (x, y))
    return result.convert("RGB")


def cover_crop(img: Image.Image, crop: tuple[float, float, float, float] | None = None) -> Image.Image:
    if crop:
        w, h = img.size
        box = (int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h))
        img = img.crop(box)
    img = img.convert("RGB")
    target_ratio = SIZE[0] / SIZE[1]
    ratio = img.width / img.height
    if ratio > target_ratio:
        new_w = int(img.height * target_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    else:
        new_h = int(img.width / target_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))
    return img.resize(SIZE, Image.LANCZOS)


def save_cutout(
    source: Path,
    dest: str,
    max_w: int = 660,
    max_h: int = 760,
    y_offset: int = 0,
    crop: tuple[float, float, float, float] | None = None,
) -> None:
    bg = beige_background()
    img = load(source)
    if crop:
        w, h = img.size
        img = img.crop((int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h)))
    img = remove_white(img)
    card = paste_with_shadow(bg, img, max_w, max_h, y_offset)
    card.save(OUT / dest, quality=92)


def save_photo(source: Path, dest: str, crop: tuple[float, float, float, float] | None = None) -> None:
    img = cover_crop(load(source), crop)
    img.save(OUT / dest, quality=92)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    save_cutout(EXTRACTED / "menu-doyaq1_p02_i029_853x1280.jpg", "passion-fruit-soda.jpg", 620, 780, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i030_853x1280.jpg", "strawberry-soda.jpg", 620, 780, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i028_853x1280.jpg", "blueberry-soda.jpg", 620, 780, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i015_728x728.jpg", "orange-juice.jpg", 650, 650, 18)

    save_photo(EXTRACTED / "menu-doyaq1_p02_i016_1024x1024.jpg", "lemon-tea.jpg", (0.34, 0.34, 0.67, 0.67))
    save_photo(EXTRACTED / "menu-doyaq1_p02_i013_900x990.jpg", "peach-tea.jpg", (0.08, 0.12, 0.84, 0.88))
    save_photo(EXTRACTED / "menu-doyaq1_p02_i018_1024x1024.jpg", "milk-tea.jpg", (0.34, 0.0, 0.67, 0.48))
    save_photo(EXTRACTED / "menu-doyaq1_p02_i017_1200x1800.jpg", "thai-milk-tea.jpg", (0.12, 0.08, 0.88, 0.82))

    save_cutout(EXTRACTED / "menu-doyaq1_p02_i010_1024x768.jpg", "coke.jpg", 470, 700, 0, (0.43, 0.0, 1.0, 1.0))
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i011_1024x768.jpg", "coke-zero.jpg", 470, 700, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i009_225x225.jpg", "sprite.jpg", 470, 700, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i012_1024x768.jpg", "soda-water.jpg", 470, 700, 0)

    save_cutout(EXTRACTED / "menu-doyaq1_p02_i023_112x356.jpg", "jinro-soju.jpg", 360, 720, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i026_326x816.jpg", "chamisul-soju.jpg", 380, 740, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i024_700x700.jpg", "saero-soju.jpg", 450, 720, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i034_1536x1024.jpg", "good-day-soju.jpg", 800, 620, 34)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i027_600x500.jpg", "tiger-beer.jpg", 440, 720, 0)
    save_cutout(EXTRACTED / "menu-doyaq1_p02_i019_252x833.jpg", "tsingtao-beer.jpg", 380, 740, 0)
    save_cutout(DRINKS / "yantai-guniang.png", "yantai-guniang.jpg", 780, 670, 20)
    save_cutout(DRINKS / "house-red-wine.png", "house-red-wine.jpg", 520, 730, 0)
    save_cutout(DRINKS / "lemon-highball.png", "lemon-highball.jpg", 560, 760, 0)
    save_cutout(DRINKS / "earl-grey-highball.png", "earl-grey-highball.jpg", 560, 760, 0)


if __name__ == "__main__":
    main()
