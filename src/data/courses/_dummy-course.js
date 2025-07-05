// ========================================================================
// PLANTILLA 1: Para Nuevas Certificaciones
// Guarda este archivo como, por ejemplo, `src/data/courses/_dummy-course.js`
// Para usarlo: copia y pega este contenido en un nuevo archivo (ej. `divemaster.js`),
// cambia el nombre de la variable (ej. `divemasterData`) y edita el contenido.
// ========================================================================

export const dummyCourseData = {
  // --- METADATOS (¡MUY IMPORTANTE!) ---
  id: "id-del-curso-aqui", // Usa un ID único, en minúsculas y separado por guiones. Ej: 'padi-divemaster'
  name: "Nombre Completo del Curso", // Ej: 'PADI Divemaster'
  type: "certification", // Manten esto como 'certification' para los cursos.

  // --- CONTENIDO DE LA PÁGINA ---
  seo: {
    title: "Título SEO",
    description: "Descripción SEO"
  },

  // El encabezado principal de la página del curso.
  header: {
    title: "TÍTULO DEL CURSO EN MAYÚSCULAS", // Ej: 'PADI DIVEMASTER'
    subtitle: "Un subtítulo atractivo que resuma el curso.",
    // Tamaño recomendado: 1920x600 píxeles (Banner Panorámico)
    imageUrl:
      "https://placehold.co/1920x600/133e70/FFFFFF?text=Imagen+del+Curso",
  },

  // La descripción principal que explica de qué trata el curso.
  description: {
    title: "Título de la Sección de Descripción", // Ej: 'Conviértete en un Profesional del Buceo'
    paragraphs: [
      "Primer párrafo de la descripción. Aquí explicas en detalle el propósito y los beneficios del curso.",
      "Segundo párrafo, si es necesario. Puedes añadir más párrafos para dar más contexto o detalles importantes.",
    ],
  },

  // La barra lateral con los detalles rápidos del curso.
  details: {
    title: "Detalles del Curso",
    items: [
      { label: "Duración", value: "X Días / Semanas" },
      { label: "Prerrequisito", value: "Certificación Anterior Requerida" },
      { label: "Profundidad Máx.", value: "XX metros" },
    ],
  },

  // Los módulos o partes principales del currículo del curso.
  curriculum: {
    title: "¿Qué Aprenderás?",
    modules: [
      {
        id: "modulo1",
        name: "Nombre del Módulo 1",
        description:
          "Descripción de lo que se aprende o practica en este módulo.",
      },
      {
        id: "modulo2",
        name: "Nombre del Módulo 2",
        description:
          "Descripción de lo que se aprende o practica en este módulo.",
      },
    ],
    // Nota opcional al final de la sección del currículo.
    note: "Aquí puedes añadir cualquier aclaración importante sobre el currículo.",
  },

  // Lista de lo que está incluido en el precio del curso.
  whatIsIncluded: {
    title: "¿Qué Incluye tu Curso?",
    items: [
      "Elemento incluido 1",
      "Elemento incluido 2",
      "Elemento incluido 3",
    ],
  },

  // La galería de imágenes para la página del curso.
  gallery: {
    title: "Momentos del Curso",
    // Tamaño recomendado: 800x600 píxeles (Formato 4:3 Horizontal)
    images: [
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+1",
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+2",
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+3",
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+4",
    ],
  },

  // El llamado a la acción final de la página.
  cta: {
    title: "¿No ves una fecha que te funcione?",
    buttonText: "Contáctanos para más opciones",
    link: "/contacto",
  },
};
