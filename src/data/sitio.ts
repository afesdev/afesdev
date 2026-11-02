// Datos generales del sitio: cámbialos aquí y se actualizan en todas las páginas.
export const sitio = {
  nombre: 'afesdev',
  // Título y descripción de la portada en Google (máx. ~60 y ~155 caracteres)
  titulo: 'afesdev · Desarrollo de apps móviles con Flutter y C#',
  descripcion:
    'Desarrollo apps móviles a la medida con Flutter y C#: diseño, programación y publicación en Google Play. Conoce mis apps y cotiza la tuya.',
  correo: 'afesdev2025@gmail.com',
  redes: {
    youtube: 'https://www.youtube.com/@afes-l7b',
  },
  // Número con indicativo del país, solo dígitos (ej: 573001234567). Vacío = no se muestra el botón.
  whatsapp: {
    numero: '573245708137',
    mensaje: 'Hola, vi tu sitio web y quiero hablar sobre una app.',
  },
  // Cifras de la portada: la fecha en que copiaste los números de Play Console
  cifrasActualizadas: 'noviembre de 2026',
};

export const servicios = [
  {
    icono: 'movil',
    titulo: 'Apps móviles a la medida',
    texto: 'Apps para Android (y iOS) con Flutter: una sola base de código, rápida y con buen diseño.',
  },
  {
    icono: 'servidor',
    titulo: 'Backend y APIs',
    texto: 'Servicios con C# y .NET, bases de datos y APIs REST para que tu app tenga datos reales.',
  },
  {
    icono: 'subir',
    titulo: 'Publicación en Google Play',
    texto: 'Cuenta de desarrollador, firma, ficha de la tienda, pruebas cerradas y paso a producción.',
  },
  {
    icono: 'video',
    titulo: 'Contenido para lanzar tu app',
    texto: 'Capturas para la tienda, videos promocionales, reels y carruseles para redes.',
  },
  {
    icono: 'llave',
    titulo: 'Mantenimiento y mejoras',
    texto: 'Nuevas funciones, corrección de errores y actualizaciones para cumplir las políticas de las tiendas.',
  },
  {
    icono: 'codigo',
    titulo: 'Asesoría técnica',
    texto: 'Te ayudo a aterrizar tu idea: qué construir primero, con qué tecnología y cuánto cuesta.',
  },
];

export const proceso = [
  { titulo: 'Idea', texto: 'Hablamos de tu idea y definimos qué necesita la primera versión.' },
  { titulo: 'Diseño', texto: 'Armo las pantallas y el flujo para que lo veas antes de programar.' },
  { titulo: 'Desarrollo', texto: 'Programo la app y el backend, con avances que puedes probar.' },
  { titulo: 'Lanzamiento', texto: 'La publico en Google Play y preparo el contenido para darla a conocer.' },
];

// 71 → "+70", 1234 → "+1.230": cifras redondeadas hacia abajo para no exagerar
export const redondear = (n: number) =>
  n < 10 ? String(n) : `+${(Math.floor(n / 10) * 10).toLocaleString('es-CO')}`;

export const tecnologias =['Flutter', 'Dart', 'C#', '.NET', 'APIs REST', 'SQL', 'Android', 'Google Play Console'];
