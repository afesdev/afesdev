#!/usr/bin/env bash
# Genera public/og-sitio.png (imagen al compartir el sitio) desde scripts/og-sitio.html
set -e
cd "$(dirname "$0")/.."
E="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
"$E" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --virtual-time-budget=6000 --window-size=1200,630 \
  --screenshot="$(cygpath -w "$PWD/public/og-sitio.png")" "file:///$(cygpath -m "$PWD/scripts/og-sitio.html")" 2>/dev/null >/dev/null
echo "Listo: public/og-sitio.png"
