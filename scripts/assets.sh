#!/usr/bin/env bash
# Convert user-supplied raw assets into exact web-ready deliverables.
# Usage:  ./scripts/assets.sh            (converts everything found)
# Drop files into assets-raw/ with these EXACT basenames (any extension):
#   raw-hero, raw-problem, raw-tech, raw-versus,
#   raw-versus-segar + raw-versus-stres (optional matched pair),
#   raw-roadmap, raw-logo (optional square >= 512px)
# Requires: magick (ImageMagick 7), cwebp.
set -euo pipefail
cd "$(dirname "$0")/.."

RAW=assets-raw
OUT=public/images/misc
mkdir -p "$OUT"

need() { command -v "$1" >/dev/null 2>&1 || { echo "missing tool: $1"; exit 1; }; }
need magick
need cwebp

# $1=basename $2=WxH $3=quality $4=out-name
convert_one() {
  local src
  src=$(ls "$RAW/$1".jpg "$RAW/$1".jpeg "$RAW/$1".png "$RAW/$1".webp 2>/dev/null | head -1 || true)
  if [ -z "${src:-}" ]; then
    echo "SKIP  $1  (no $RAW/$1.{jpg,jpeg,png,webp})"
    return 0
  fi
  local tmp
  tmp=$(mktemp --suffix=.png)
  magick "$src" -auto-orient -strip -colorspace sRGB \
    -resize "$2^" -gravity center -extent "$2" "png24:$tmp"
  cwebp -q "$3" -m 6 -sharp_yuv -mt "$tmp" -o "$OUT/$4" 2>&1 | grep -E "Dimension|Output" || true
  rm -f "$tmp"
  echo "OK    $OUT/$4  <-  $src"
}

convert_one raw-hero          1200x1020 82 hero.webp
convert_one raw-problem       1600x1000 80 problem.webp
convert_one raw-tech          1600x900  80 tech.webp
convert_one raw-versus        1600x1000 80 versus.webp
convert_one raw-versus-segar  1600x1000 80 versus-segar.webp
convert_one raw-versus-stres  1600x1000 80 versus-stres.webp
convert_one raw-roadmap       1600x800  80 roadmap.webp
convert_one raw-logo          512x512   90 logo.webp

echo
echo "--- deliverables ---"
magick identify "$OUT"/*.webp 2>/dev/null || echo "(no webp yet)"
du -sh "$OUT"
