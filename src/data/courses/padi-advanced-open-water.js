// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
// import padi_advanced_open_water_banner_image from '../../assets/courses/padi-advanced-open-water-banner-image.jpg';
import padi_advanced_open_water_image from '../../assets/courses/padi-advanced-open-water-image.jpg';

// import padi_advanced_open_water_content_1_image from '../../assets/courses/padi-advanced-open-water-content-1-image.jpg';
// import padi_advanced_open_water_content_2_image from '../../assets/courses/padi-advanced-open-water-content-2-image.jpg';
// import padi_advanced_open_water_content_3_image from '../../assets/courses/padi-advanced-open-water-content-3-image.jpg';
// import padi_advanced_open_water_content_4_image from '../../assets/courses/padi-advanced-open-water-content-4-image.jpg';

export const padiAdvancedOpenWaterData = {
  id: 'padi-advanced-open-water',
  name: 'PADI Advanced Open Water Diver',
  type: 'certification',
  seo: {
    title: 'Curso PADI Advanced Open Water | Buceo Avanzado con JustDiveCol',
    description:
      'Perfecciona tus habilidades con el curso PADI Advanced Open Water de JustDiveCol. Explora el buceo profundo, la navegación subacuática y más.',
  },
  header: {
    title: 'PADI ADVANCED OPEN WATER',
    subtitle: 'Lleva tus habilidades y aventuras al siguiente nivel.',
    bannerImageUrl:
      'https://placehold.co/1920x800/133e70/FFFFFF?text=Banner+Advanced+Open+Water+Diver',
    imageUrl: padi_advanced_open_water_image,
  },
  description: {
    title: 'Explora Más Allá de los Límites',
    paragraphs: [
      'El curso PADI Advanced Open Water Diver está diseñado para perfeccionar tus habilidades. Se basa en lo que ya has aprendido y desarrolla nuevas capacidades al introducirte en nuevas actividades y formas de divertirte buceando.',
      'Completarás cinco inmersiones de aventura que incluyen dos obligatorias (Buceo Profundo y Navegación Subacuática) y tres de tu elección, abriendo un nuevo mundo de posibilidades submarinas.',
    ],
  },
  details: {
    title: 'Detalles del Curso',
    items: [
      // { label: 'Precio', value: 'Proximamente' },
      { label: 'Duración', value: '2-3 Días' },
      { label: 'Profundidad Máx.', value: '30 metros' },
    ],
  },
  curriculum: {
    title: 'Tus Nuevas Aventuras',
    modules: [
      {
        id: 'profundo',
        name: 'Inmersión de Aventura Profunda (Obligatoria)',
        description:
          'Aprenderás a planificar inmersiones para lidiar con los efectos fisiológicos y los desafíos del buceo a mayor profundidad.',
      },
      {
        id: 'navegacion',
        name: 'Inmersión de Navegación Subacuática (Obligatoria)',
        description:
          'Perfeccionarás tus habilidades de navegación con brújula y mejorarás la observación de tu entorno para orientarte de forma natural.',
      },
      {
        id: 'eleccion',
        name: 'Tres Inmersiones de Aventura a tu Elección',
        description:
          'Podrás elegir tres inmersiones más de una larga lista de opciones, como Buceo Nocturno, Flotabilidad de Dominio Avanzado, Búsqueda y Recuperación, ¡y muchas más!',
      },
    ],
    notes: [
      'Certificación Reconocida Internacionalmente: Al completar el curso, obtendrás una credencial PADI válida a nivel mundial que te permitirá bucear hasta 30 metros de profundidad acompañado por otro buzo certificado.',
    ],
  },
  requirements: {
    title: 'Requisitos para Participar',
    items: [
      'Tener mínimo 12 años de edad',
      'Tener la certificación PADI Open Water Diver (o equivalente)',
      'Aprobar un cuestionario médico o contar con autorización de un médico',
      'Compromiso para asistir a todas las sesiones del curso',
    ],
  },
  whatIsIncluded: {
    title: '¿Qué Incluye tu Curso?',
    items: [
      'Certificación Internacional PADI Advanced Open Water',
      'Acceso a la plataforma PADI eLearning®',
      '5 inmersiones de aventura en aguas abiertas',
      'Alquiler de equipo especializado (linterna, brújula, etc.)',
      'Acompañamiento de un Instructor PADI',
      'Seguro de buceo durante las actividades acuáticas',
    ],
  },
  gallery: {
    title: 'Momentos del Curso',
    images: [
      // 'https://placehold.co/800x600/36598B/FFFFFF?text=Navegación+con+Brújula',
      // 'https://placehold.co/800x600/36598B/FFFFFF?text=Explorando+a+30m',
      // 'https://placehold.co/800x600/36598B/FFFFFF?text=Buceo+Nocturno',
      // 'https://placehold.co/800x600/36598B/FFFFFF?text=Equipo+Avanzado',
    ],
  },
  cta: {
    title: '¿No ves una fecha que te funcione?',
    buttonText: 'Contáctanos para más opciones',
    link: '/contacto',
  },
};
