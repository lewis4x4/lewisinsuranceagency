#!/usr/bin/env python3
"""Export social images with Pillow 12: python3 scripts/og-images/export-og-images.py.

Sources are read only. Repeated runs overwrite the same deterministic JPEGs.
All reported file sizes use decimal KB (1 KB = 1,000 bytes).
"""

from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
from typing import Literal

from PIL import Image, ImageEnhance, ImageFilter, ImageOps


PUBLIC_DIR = Path(__file__).resolve().parents[2] / "public"
OUTPUT_DIR = PUBLIC_DIR / "images/og"
SIZE = (1200, 630)
QUALITY = 82
MAX_BYTES = 300_000


@dataclass(frozen=True)
class Source:
    path: str
    mode: Literal["crop", "contain"]
    centering: tuple[float, float] = (0.5, 0.5)
    background: str | None = None


# Framing chosen after visual inspection. Contain preserves the entire source;
# its background is either an edge-matching color or a blurred, darkened cover.
SOURCES = (
    Source("images/florida-insurance-tax-documents-2026.png", "crop"),
    Source("images/2026_Homeowners_Checklist.jpg", "contain", background="white"),
    Source("images/2026_Auto_Insurance_Review.jpg", "contain"),
    # Keep the car and street, removing excess sky.
    Source("images/blog/florida-auto-rates-shop-renewal-2026.png", "crop", (0.5, 1.0)),
    Source("images/blog/nfip-september-30-2026-florida-flood-deadline.png", "crop"),
    # Preserve the documents and glasses at the bottom of the photograph.
    Source("images/blog/how-to-read-florida-home-insurance-renewal-notice.png", "crop", (0.5, 1.0)),
    Source("images/blog/florida-workers-comp-rates-2026-2027-ncci.png", "crop", (0.5, 1.0)),
    # The centered text and hurricane symbol fit fully within this crop.
    Source("images/blog/twenty-minutes-florida-home-policy-peak-hurricane.png", "crop"),
    Source("images/articles/2026/01/progressive-insurance-florida-rebate-2026-featured.png", "contain"),
    Source("images/blog/florida-crash-report-threshold-2000-october-2026.jpg", "crop"),
)


def render(source: Source) -> Image.Image:
    with Image.open(PUBLIC_DIR / source.path) as original:
        rgba = ImageOps.exif_transpose(original).convert("RGBA")
        # Flatten transparency before resizing to avoid dark halos.
        flattened = Image.new("RGBA", rgba.size, "white")
        flattened.alpha_composite(rgba)
        rgb = flattened.convert("RGB")

    if source.mode == "crop":
        return ImageOps.fit(
            rgb, SIZE, method=Image.Resampling.LANCZOS, centering=source.centering
        )

    if source.background:
        canvas = Image.new("RGB", SIZE, source.background)
    else:
        canvas = ImageOps.fit(rgb, SIZE, method=Image.Resampling.LANCZOS)
        canvas = canvas.filter(ImageFilter.GaussianBlur(radius=32))
        canvas = ImageEnhance.Brightness(canvas).enhance(0.55)

    foreground = ImageOps.contain(rgb, SIZE, method=Image.Resampling.LANCZOS)
    position = ((SIZE[0] - foreground.width) // 2, (SIZE[1] - foreground.height) // 2)
    canvas.paste(foreground, position)
    return canvas


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print("| OG file | Source path | Source dims | Source KB | Output dims | Output KB | Mode |")
    print("| --- | --- | --- | ---: | --- | ---: | --- |")

    for source in SOURCES:
        source_path = PUBLIC_DIR / source.path
        output_path = OUTPUT_DIR / f"{source_path.stem}-og.jpg"
        output = render(source)
        # Clear inherited EXIF, ICC profiles, comments, and other metadata.
        output.info.clear()
        encoded = BytesIO()
        output.save(encoded, format="JPEG", quality=QUALITY, progressive=True, optimize=True)
        data = encoded.getvalue()
        if output.size != SIZE or len(data) >= MAX_BYTES:
            raise ValueError(f"{output_path.name} must be 1200x630 and under 300 KB")
        output_path.write_bytes(data)

        with Image.open(source_path) as original:
            source_dims = f"{original.width}x{original.height}"
        print(
            f"| {output_path.name} | /{source.path} | {source_dims} | "
            f"{source_path.stat().st_size / 1000:.1f} | 1200x630 | "
            f"{len(data) / 1000:.1f} | {source.mode} |"
        )


if __name__ == "__main__":
    main()
