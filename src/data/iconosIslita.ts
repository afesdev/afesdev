// Íconos de línea para la página de Islita y su demostración. Son SVG propios (24 × 24, trazo de 2):
// los de Windows (Segoe Fluent Icons) no existen en Mac, Android ni iPhone.
export const iconos = {
  inicio: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',
  musica: 'M9 18V5l12-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  check: 'M20 6 9 17l-5-5',
  calendario: 'M3 5h18v16H3z M16 3v4 M8 3v4 M3 10h18',
  portapapeles: 'M8 3h8v4H8z M16 5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2',
  sistema: 'M3 4h18v12H3z M8 20h8 M12 16v4',
  campana: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  ajustes: 'M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6',
  anterior: 'M19 20 9 12l10-8z M5 19V5',
  siguiente: 'M5 4l10 8-10 8z M19 5v14',
  pausa: 'M6 4h4v16H6z M14 4h4v16h-4z',
  reproducir: 'M7 4l13 8-13 8z',
  mas: 'M12 5v14 M5 12h14',
  menos: 'M5 12h14',
  cerrar: 'M18 6 6 18 M6 6l12 12',
  gota: 'M12 2.7s6 6.3 6 11.3a6 6 0 0 1-12 0c0-5 6-11.3 6-11.3z',
  mundo: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20',
  calculadora: 'M5 2h14v20H5z M8 6h8 M8 11h.01 M12 11h.01 M16 11h.01 M8 15h.01 M12 15h.01 M16 15h.01 M8 19h.01 M12 19h.01 M16 19h.01',
  escudo: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  chispa: 'M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z',
  paleta: 'M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 22 9.8C22 5.5 17.5 2 12 2z M7.5 10.5h.01 M10.5 6.5h.01 M15 6.5h.01',
  carpeta: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  bluetooth: 'M7 7l10 10-5 5V2l5 5L7 17',
  dinero: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  rayo: 'M13 2 3 14h9l-1 8 10-12h-9z',
  oculto: 'M3 3l18 18 M10.6 10.6a2 2 0 0 0 2.8 2.8 M9.9 4.2A10 10 0 0 1 22 12c-.6 1.3-1.4 2.4-2.3 3.4 M6.6 6.6A10 10 0 0 0 2 12c1.7 4 5.6 7 10 7 1.6 0 3.1-.4 4.4-1.1',
  teclado: 'M2 6h20v12H2z M6 10h.01 M10 10h.01 M14 10h.01 M18 10h.01 M7 14h10',
  candado: 'M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4',
  sinCuenta: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M17 8l5 5 M22 8l-5 5',
  reloj: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  panel: 'M3 3h18v8H3z M3 15h7v6H3z M14 15h7v6h-7z',
  temporizador: 'M10 2h4 M12 14l3-3 M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
} as const;

export type NombreIcono = keyof typeof iconos;

/** El SVG listo para insertar, con el color del texto que lo rodea. */
export const svg = (nombre: NombreIcono, tam = 16, grosor = 2) =>
  `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${grosor}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconos[nombre]
    .split(' M')
    .map((d, i) => `<path d="${i ? 'M' + d : d}"/>`)
    .join('')}</svg>`;
