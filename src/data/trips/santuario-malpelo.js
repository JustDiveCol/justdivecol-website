export const santuarioMalpeloData = {
  id: 'santuario-malpelo',
  name: 'Santuario de Malpelo',
  type: 'trip',
  header: {
    title: 'SANTUARIO DE MALPELO',
    subtitle: 'La cumbre de la aventura submarina. Buceo de clase mundial en un santuario de grandes pelágicos.',
    imageUrl: 'https://placehold.co/1920x800/133e70/FFFFFF?text=Tiburones+Martillo+en+Malpelo',
  },
  description: {
    title: 'Una Expedición para Buzos Experimentados',
    paragraphs: [
      'Malpelo no es un destino de buceo, es una peregrinación. Esta roca solitaria en el Pacífico colombiano es un imán para la vida marina, famosa mundialmente por sus masivas congregaciones de tiburones martillo, sedosos, Galápagos y el ocasional tiburón ballena.',
      'Este es un viaje en formato "vida a bordo", diseñado para buzos avanzados que buscan la máxima adrenalina y encuentros que definen una vida. Las condiciones pueden ser exigentes, pero la recompensa es incomparable.'
    ]
  },
  details: {
    title: 'Detalles de la Expedición',
    startDate: '2025-07-15',
    endDate: '2025-07-23',
    items: [
      { label: 'Precio', value: 'Consultar' },
      { label: 'Duración', value: '8 Días / 7 Noches' },
      { label: 'Inmersiones', value: '~16 Inmersiones' },
      { label: 'Nivel Mínimo', value: 'Advanced + 50 Buceos' },
    ]
  },
  itinerary: {
    title: 'Vida a Bordo',
    days: [
      { day: 1, title: 'Zarpe desde Buenaventura', description: 'Embarque en el barco vida a bordo por la tarde y comienzo de la navegación nocturna hacia Malpelo (aprox. 30-36 horas).' },
      { day: 2, title: 'Navegación en Alta Mar', description: 'Día completo de navegación. Aprovechamos para briefings de seguridad, preparación de equipos y charlas sobre la fauna de Malpelo.' },
      { day: 3, title: 'Llegada y Primer Contacto', description: 'Llegada al Santuario por la mañana y primera inmersión de chequeo. Dos inmersiones más durante el día en sitios como "El Arrecife".' },
      { day: 4, title: 'Inmersión Total: La Nevera', description: 'Tres a cuatro inmersiones diarias explorando el sitio más icónico: "La Nevera", buscando las famosas paredes de tiburones martillo.' },
      { day: 5, title: 'Inmersión Total: El Bajo del Monstruo', description: 'Dedicamos el día a "El Bajo del Monstruo", un pináculo conocido por la gran cantidad de vida y posibles encuentros con el tiburón monstruo.' },
      { day: 6, title: 'Inmersión Total: Tres Mosqueteros', description: 'Exploramos los pináculos de "Tres Mosqueteros", buscando escuelas de pargos y jureles, y más tiburones.' },
      { day: 7, title: 'Últimas Inmersiones y Regreso', description: 'Dos últimas inmersiones por la mañana y comienzo de la navegación de regreso a Buenaventura.' },
      { day: 8, title: 'Arribo a Puerto', description: 'Llegada a Buenaventura por la noche o madrugada del día siguiente, fin de la expedición.' }
    ]
  },
  whatIsIncluded: {
    title: '¿Qué Incluye tu Viaje?',
    items: [ 'Alojamiento en camarote compartido en el barco', 'Todas las comidas, snacks y bebidas no alcohólicas a bordo', 'Aproximadamente 16 inmersiones', 'Guías/Instructores expertos en Malpelo', 'Tanques, lastre y nitrox (si está certificado)' ]
  },
  whatIsNotIncluded: {
    title: '¿Qué NO Incluye?',
    items: [ 'Tiquetes aéreos a Buenaventura', 'Equipo de buceo personal', 'Tarifas de entrada al Santuario de Fauna y Flora', 'Seguro de buceo y viaje (obligatorio)', 'Propinas para la tripulación' ]
  },
  offeredCourses: {
    title: 'Especialidades Disponibles',
    ids: [] 
  },
  cta: {
    title: '¿Listo para la Expedición de tu Vida?',
    buttonText: 'Solicitar Información',
    link: '/contacto'
  }
};