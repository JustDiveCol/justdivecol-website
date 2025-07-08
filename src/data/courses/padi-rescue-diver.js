// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
// import padi_rescue_diver_banner_image from '../../assets/courses/padi-rescue-diver-banner-image.jpg';
import padi_rescue_diver_image from '../../assets/courses/padi-rescue-diver-image.jpg';

// import padi_rescue_diver_content_1_image from '../../assets/courses/padi-rescue-diver-content-1-image.jpg';
// import padi_rescue_diver_content_2_image from '../../assets/courses/padi-rescue-diver-content-2-image.jpg';
// import padi_rescue_diver_content_3_image from '../../assets/courses/padi-rescue-diver-content-3-image.jpg';
// import padi_rescue_diver_content_4_image from '../../assets/courses/padi-rescue-diver-content-4-image.jpg';

export const padiRescueDiverData = {
  id: 'padi-rescue-diver',
  name: 'PADI Rescue Diver',
  type: 'certification',
  seo: {
    title: 'Curso PADI Rescue Diver | Buceo de Rescate con JustDiveCol',
    description:
      'Conviértete en un buzo más seguro y confiable. Aprende a prevenir y gestionar emergencias con el curso PADI Rescue Diver de JustDiveCol.',
  },
  header: {
    title: 'PADI RESCUE DIVER',
    subtitle: 'Conviértete en el buzo en el que todos confían.',
    bannerImageUrl:
      'https://placehold.co/1920x800/133e70/FFFFFF?text=Banner+Rescue+Diver',
    imageUrl: padi_rescue_diver_image,
  },
  description: {
    title: 'Aprende a Prevenir y Gestionar Emergencias',
    paragraphs: [
      'El curso PADI Rescue Diver cambiará tu forma de bucear, y lo hará de la mejor manera posible. Aprenderás a identificar y solucionar problemas menores antes de que se conviertan en problemas mayores, y ganarás muchísima confianza en tus habilidades como buzo.',
      'Es un curso desafiante pero increíblemente gratificante. A través de escenarios realistas, te prepararás para ayudar a otros y a ti mismo, convirtiéndote en un compañero de buceo mucho más completo y seguro.',
    ],
  },
  details: {
    title: 'Detalles del Curso',
    items: [
      { label: 'Duración', value: '3 Días Intensivos' },
      { label: 'Enfoque', value: 'Resolución de problemas' },
    ],
  },
  curriculum: {
    title: 'Habilidades que Salvan Vidas',
    modules: [
      {
        id: 'teoria',
        name: 'Psicología del Rescate y Autorescate',
        description:
          'Comprenderás el estrés en buzos, el manejo de emergencias y las técnicas para mantener la calma y actuar de manera efectiva.',
      },
      {
        id: 'ejercicios',
        name: 'Ejercicios de Rescate',
        description:
          'Practicarás más de 10 habilidades de rescate, desde ayudar a un buzo cansado en superficie hasta responder ante un buzo que no responde bajo el agua.',
      },
      {
        id: 'escenarios',
        name: 'Escenarios de Emergencia',
        description:
          'Integrarás todas tus habilidades en dos escenarios finales que simulan una situación de emergencia real, poniendo a prueba tu capacidad de respuesta.',
      },
    ],
    notes: [
      'Certificación Reconocida Internacionalmente: Al completar este curso estarás preparado para responder en situaciones de emergencia y dar el siguiente paso hacia niveles profesionales como Divemaster o Instructor PADI.',
    ],
  },
  requirements: {
    title: 'Requisitos para Participar',
    items: [
      'Edad mínima recomendada: 12 años',
      'Tener la certificación PADI Advanced Open Water Diver (o equivalente)',
      'Contar con entrenamiento en RCP y Primeros Auxilios dentro de los últimos 24 meses (se puede hacer junto con el curso Rescue Diver por un costo adicional)',
      'Aprobar un cuestionario médico o contar con autorización de un médico',
      'Compromiso para asistir a todas las sesiones del curso',
    ],
  },
  whatIsIncluded: {
    title: '¿Qué Incluye tu Entrenamiento de Rescate?',
    items: [
      'Certificación Internacional PADI Rescue Diver',
      'Acceso a la plataforma PADI eLearning® para ambos cursos',
      'Entrenamiento intensivo de habilidades y escenarios',
      'Desarrollo de un plan de emergencia personal',
      'Acompañamiento de un Instructor PADI especializado',
      'Seguro de buceo DAN durante las actividades acuáticas',
    ],
  },
  gallery: {
    title: 'Momentos del Entrenamiento',
    images: [
      'https://placehold.co/800x600/36598B/FFFFFF?text=Simulacro+de+Rescate',
      'https://placehold.co/800x600/36598B/FFFFFF?text=Asistencia+en+Superficie',
      'https://placehold.co/800x600/36598B/FFFFFF?text=Plan+de+Emergencia',
      'https://placehold.co/800x600/36598B/FFFFFF?text=Equipo+de+Oxígeno',
    ],
  },
  cta: {
    title: '¿No ves una fecha que te funcione?',
    buttonText: 'Contáctanos para más opciones',
    link: '/contacto',
  },
};
