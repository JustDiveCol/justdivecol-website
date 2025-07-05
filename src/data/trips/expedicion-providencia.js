export const expedicionProvidenciaData = {
  id: 'expedicion-providencia',
  name: 'Aventura en Providencia',
  type: 'trip',
  header: {
    title: 'AVENTURA EN PROVIDENCIA',
    subtitle: 'Explora la joya virgen del Caribe y la tercera barrera de coral más grande del mundo.',
    imageUrl: 'https://placehold.co/1920x800/36598B/FFFFFF?text=Providencia+y+Santa+Catalina',
  },
  description: {
    title: 'Reserva de Biósfera Seaflower',
    paragraphs: [
      'Declarada Reserva de Biósfera por la UNESCO, Providencia y Santa Catalina ofrecen una experiencia de buceo única, lejos de las multitudes. Sus aguas protegidas albergan una salud de coral excepcional, una topografía volcánica impresionante con cuevas y túneles, y una gran cantidad de vida marina.',
      'Este destino es para aquellos que buscan una conexión más profunda y tranquila con el océano, combinando buceos espectaculares con la cultura raizal y la belleza de una isla que parece detenida en el tiempo.'
    ]
  },
  details: {
    title: 'Detalles del Viaje',
    startDate: '2025-09-20',
    endDate: '2025-09-26',
    items: [
      { label: 'Precio', value: 'Desde COP 3.200.000' },
      { label: 'Duración', value: '6 Días / 5 Noches' },
      { label: 'Inmersiones', value: '10 Inmersiones diurnas' },
      { label: 'Nivel Mínimo', value: 'Open Water Diver' },
    ]
  },
  itinerary: {
    title: 'Itinerario Propuesto',
    days: [
      { day: 1, title: 'Llegada y Encanto Isleño', description: 'Arribo a Providencia, traslado a tu posada nativa y tarde libre para disfrutar de la playa de Agua Dulce.' },
      { day: 2, title: 'Bautizo en la Barrera', description: 'Dos inmersiones para descubrir la majestuosidad de la barrera de coral en sitios como "Turtle Rock" y "The Tete\'s Place".' },
      { day: 3, title: 'Cuevas y Misterios', description: 'Exploramos formaciones volcánicas submarinas y cuevas en sitios como "Felipe\'s Place". Dos inmersiones.' },
      { day: 4, title: 'Día en Cayo Cangrejo', description: 'Dos inmersiones cerca del famoso Cayo Cangrejo, seguido de una tarde de snorkel y relax en sus aguas cristalinas.' },
      { day: 5, title: 'Buceo Profundo y Despedida', description: 'Inmersiones más profundas para buzos avanzados en "Spiral" o "The Point". Tarde de despedida.' },
      { day: 6, title: 'Regreso', description: 'Mañana libre y vuelo de regreso desde El Embrujo.' }
    ]
  },
  whatIsIncluded: {
    title: '¿Qué Incluye tu Viaje?',
    items: [ 'Alojamiento en posada nativa', 'Traslados en la isla', '10 inmersiones guiadas (incluye tanques y lastre)', 'Guía PADI local experto', 'Entrada a Cayo Cangrejo' ]
  },
  whatIsNotIncluded: {
    title: '¿Qué NO Incluye?',
    items: [ 'Tiquetes aéreos a Providencia', 'Alquiler de equipo de buceo personal', 'Alimentación no especificada', 'Tarjeta de turismo' ]
  },
  offeredCourses: {
    title: 'Cursos Disponibles en este Viaje',
    ids: ['padi-advanced-open-water']
  },
  cta: {
    title: '¿Listo para el Paraíso?',
    buttonText: 'Reserva tu Cupo',
    link: '/contacto'
  }
};