from __future__ import annotations

import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

SOURCES = [
    r"E:\도야짬뽕\디자인\DOYA\DOYA\DESIGN\Cafe (25 x 14 cm).pdf",
    r"E:\도야짬뽕\디자인\DOYA\DOYA\DESIGN\NEW MENU 29,5X16.pdf",
    r"E:\도야짬뽕\디자인\DOYA\DOYA\DESIGN\ROCK CANDY MENU (29.5x16).pdf",
    r"E:\도야짬뽕\디자인\DOYA\DOYA\DESIGN\STANDEE NEW MENU 160X60.pdf",
    r"E:\도야짬뽕\디자인\DOYA\DOYA\MENU\menu-DoyaJjambbong.pdf",
    r"E:\도야짬뽕\디자인\song ngữ (1) 메뉴판(베트남어 1군점).ai",
    r"E:\도야짬뽕\디자인\메뉴판\Menu DoyaQ1.ai",
]

OUT_DIR = Path("tmp/drink-menu-source/extracted")


def slugify(value: str) -> str:
    value = re.sub(r"[^A-Za-z0-9._-]+", "-", value)
    return value.strip("-").lower()[:80]


def save_image(image: Image.Image, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGB")
    if image.mode == "RGBA":
        background = Image.new("RGB", image.size, "white")
        background.paste(image, mask=image.getchannel("A"))
        image = background
    image.save(target, quality=92)


def extract() -> list[tuple[Path, str, tuple[int, int]]]:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    records: list[tuple[Path, str, tuple[int, int]]] = []
    for source in SOURCES:
        path = Path(source)
        if not path.exists():
            print(f"missing: {path}")
            continue

        print(f"reading: {path}")
        try:
            reader = PdfReader(str(path))
        except Exception as exc:
            print(f"  failed: {exc}")
            continue

        source_slug = slugify(path.stem)
        for page_index, page in enumerate(reader.pages, start=1):
            try:
                images = list(page.images)
            except Exception as exc:
                print(f"  page {page_index}: image list failed: {exc}")
                continue
            print(f"  page {page_index}: {len(images)} images")
            for image_index, img in enumerate(images, start=1):
                try:
                    pil_image = img.image
                except Exception as exc:
                    print(f"    image {image_index}: decode failed: {exc}")
                    continue
                width, height = pil_image.size
                if width < 80 or height < 80:
                    continue
                label = f"{source_slug}_p{page_index:02d}_i{image_index:03d}_{width}x{height}"
                target = OUT_DIR / source_slug / f"{label}.jpg"
                save_image(pil_image, target)
                records.append((target, label, (width, height)))
    return records


def make_contact_sheet(records: list[tuple[Path, str, tuple[int, int]]]) -> Path | None:
    if not records:
        return None

    thumb_w, thumb_h = 220, 150
    label_h = 44
    gap = 14
    cols = 4
    rows = (len(records) + cols - 1) // cols
    sheet = Image.new(
        "RGB",
        (cols * thumb_w + (cols + 1) * gap, rows * (thumb_h + label_h) + (rows + 1) * gap),
        "#f8f2e6",
    )
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for idx, (path, label, size) in enumerate(records):
        row, col = divmod(idx, cols)
        x = gap + col * (thumb_w + gap)
        y = gap + row * (thumb_h + label_h + gap)
        with Image.open(path) as img:
            img.thumbnail((thumb_w, thumb_h), Image.LANCZOS)
            bg = Image.new("RGB", (thumb_w, thumb_h), "white")
            bg.paste(img, ((thumb_w - img.width) // 2, (thumb_h - img.height) // 2))
            sheet.paste(bg, (x, y))
        text = f"{idx + 1}. {label}\n{size[0]}x{size[1]}"
        draw.text((x, y + thumb_h + 5), text[:90], fill="#1b1715", font=font)

    target = OUT_DIR / "contact-sheet.jpg"
    sheet.save(target, quality=92)
    return target


if __name__ == "__main__":
    extracted = extract()
    print(f"extracted: {len(extracted)} images")
    sheet = make_contact_sheet(extracted)
    if sheet:
        print(f"contact_sheet: {sheet.resolve()}")
