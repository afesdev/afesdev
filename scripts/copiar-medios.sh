#!/usr/bin/env bash
# Copia imágenes y videos de las apps al sitio. Uso: bash scripts/copiar-medios.sh
# - Imágenes → src/assets/apps/<app>/ (Astro las optimiza)
# - Videos   → public/videos/<app>/ con su portada (primer cuadro) en .jpg
set -e
cd "$(dirname "$0")/.."
F="$LOCALAPPDATA/Microsoft/WinGet/Links/ffmpeg.exe"
CS=/c/AprendeCsharp/AppCsharp/store
FI=/c/Users/andre/OneDrive/Documentos/GitHub/Financially/finanzasapp/store

copiar() { # app origen-play origen-pantallas pantallas...
  local app=$1 play=$2 pant=$3; shift 3
  local a=src/assets/apps/$app
  mkdir -p "$a/capturas" "$a/pantallas"
  cp "$play/icono-512.png" "$a/icono.png"
  cp "$play/grafico-destacado-1024x500.png" "$a/destacado.png"
  for n in 1 2 3 4 5 6 7 8; do cp "$play/captura-$n-1080x1920.png" "$a/capturas/$n.png"; done
  for p in "$@"; do cp "$pant/$p.png" "$a/pantallas/$p.png"; done
}
copiar aprende-csharp "$CS/play" "$CS/capturas" inicio leccion codigo-99 progreso
copiar financially "$FI" "$FI/capturas" 1 2 4 7

video() { # app origen nombre
  local d=public/videos/$1; mkdir -p "$d"
  cp "$2" "$d/$3.mp4"
  "$F" -v error -y -ss 1 -i "$2" -frames:v 1 -q:v 4 "$d/$3.jpg"
}
video aprende-csharp "$CS/video/aprendecsharp-video-survival-mode.mp4" promo
for n in 1 2 3; do video aprende-csharp "$CS/tiktok/tiktok-$n.mp4" corto-$n; done
video financially "$FI/video/financially-video-final.mp4" promo
for n in 1 2 3; do video financially "$FI/tiktok/tiktok-$n.mp4" corto-$n; done
echo "Listo"
