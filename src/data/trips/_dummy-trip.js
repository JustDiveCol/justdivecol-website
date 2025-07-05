export const dummyTripData = {
  id: "id-del-viaje-aqui",
  name: "Nombre Completo del Viaje",
  type: "trip",

  seo: {
    title: "Título SEO",
    description: "Descripción SEO"
  },
  
  header: {
    title: "TÍTULO DEL VIAJE EN MAYÚSCULAS",
    subtitle: "Un subtítulo atractivo que resuma la esencia del viaje.",
    // Tamaño recomendado: 1920x600 píxeles (Banner Panorámico)
    imageUrl:
      "https://placehold.co/1920x600/36598B/FFFFFF?text=Imagen+del+Viaje",
  },
  description: {
    title: "Título de la Sección de Descripción",
    paragraphs: [
      "Primer párrafo de la descripción del viaje.",
      "Segundo párrafo, si es necesario.",
    ],
  },
  details: {
    title: "Detalles del Viaje",
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
    items: [
      { label: "Precio", value: "Desde COP X.XXX.XXX" },
      { label: "Inmersiones", value: "X Inmersiones" },
      { label: "Nivel Mínimo", value: "Certificación Requerida" },
    ],
  },
  itinerary: {
    title: "Itinerario Propuesto",
    days: [
      {
        day: 1,
        title: "Título del Día 1",
        description: "Descripción de las actividades para este día.",
      },
      {
        day: 2,
        title: "Título del Día 2",
        description: "Descripción de las actividades para este día.",
      },
    ],
    // Nota opcional al final de la sección del itinerario.
    note: "Aquí puedes añadir cualquier aclaración importante sobre el itinerario.",
  },
  whatIsIncluded: {
    title: "¿Qué Incluye tu Viaje?",
    items: ["Elemento incluido 1", "Elemento incluido 2"],
  },
  whatIsNotIncluded: {
    title: "¿Qué NO Incluye?",
    items: ["Elemento no incluido 1", "Elemento no incluido 2"],
  },
  offeredCourses: {
    title: "Cursos Disponibles en este Viaje",
    ids: ["padi-advanced-open-water"],
  },
  gallery: {
    title: "Momentos de la Expedición",
    // Tamaño recomendado: 800x600 píxeles (Formato 4:3 Horizontal)
    images: [
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+Galería+1",
      "https://placehold.co/800x600/36598B/FFFFFF?text=Foto+Galería+2",
    ],
  },
  cta: {
    title: "¿Listo para esta aventura?",
    buttonText: "Reserva tu Cupo",
    link: "/contacto",
  },
};
