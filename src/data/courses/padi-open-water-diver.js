// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
import padi_open_water_banner_image from '../../assets/courses/padi-open-water-banner-image.jpg';
import padi_open_water_image from '../../assets/courses/padi-open-water-image.jpg';

import padi_open_water_content_1_image from '../../assets/courses/padi-open-water-content-1-image.jpg';
import padi_open_water_content_2_image from '../../assets/courses/padi-open-water-content-2-image.jpg';
import padi_open_water_content_3_image from '../../assets/courses/padi-open-water-content-3-image.jpg';
import padi_open_water_content_4_image from '../../assets/courses/padi-open-water-content-4-image.jpg';

export const padiOpenWaterDiverData = {
  id: 'padi-open-water-diver',
  name: 'PADI Open Water Diver',
  type: 'certification',
  seo: {
    title: 'Curso PADI Open Water Diver | Aprende a Bucear con JustDiveCol',
    description:
      'Conviértete en un buzo certificado con el curso PADI Open Water Diver de JustDiveCol. Aprende los fundamentos del buceo y obtén tu certificación para explorar el mundo submarino.',
  },
  header: {
    title: 'PADI OPEN WATER DIVER',
    subtitle: 'Tu pasaporte para explorar el 70% del planeta.',
    bannerImageUrl: padi_open_water_banner_image,
    imageUrl: padi_open_water_image,
  },
  description: {
    title: 'Conviértete en un Buzo Certificado',
    paragraphs: [
      'El curso PADI Open Water Diver es la certificación de buceo más popular y reconocida del mundo. Millones de personas han aprendido a bucear y han descubierto las maravillas del mundo acuático a través de este curso.',
      'En JustDiveCol, te guiaremos paso a paso, desde los fundamentos teóricos hasta tus primeras inmersiones en el mar, asegurando que te conviertas en un buzo competente, seguro y apasionado.',
    ],
  },
  details: {
    title: 'Detalles del Curso',
    items: [
      { label: 'Duración', value: '3-4 Días' },
      { label: 'Profundidad Máx.', value: '18 metros' },
    ],
  },
  curriculum: {
    title: '¿Qué Aprenderás?',
    modules: [
      {
        id: 'teoria',
        name: 'Módulos Teóricos',
        description:
          'A través de la plataforma PADI eLearning®, aprenderás a tu propio ritmo los principios fundamentales del buceo, desde la física y la fisiología hasta la planificación de inmersiones.',
      },
      {
        id: 'asesoria-virtual',
        name: 'Asesoría Virtual Personalizada',
        description:
          'Entendemos que el eLearning puede generar dudas. Por eso, complementamos tu estudio con 5 sesiones virtuales en vivo (una por cada sección teórica) con uno de nuestros instructores. En ellas, reforzaremos los conceptos clave, resolveremos tus preguntas y nos aseguraremos de que llegues a la parte práctica con total confianza.',
      },
      {
        id: 'piscina',
        name: 'Sesiones en Aguas Confinadas',
        description:
          'En un entorno controlado como una piscina, practicarás las habilidades esenciales de buceo, desde armar tu equipo hasta dominar la flotabilidad y los procedimientos de seguridad.',
      },
      {
        id: 'mar',
        name: 'Inmersiones en Aguas Abiertas',
        description:
          '¡La parte más emocionante! Realizarás cuatro inmersiones en el mar, aplicando todo lo que aprendiste y comenzando a explorar el mundo submarino real bajo la supervisión de tu instructor.',
      },
    ],
    notes: [
      'Certificación Reconocida Internacionalmente: Al completar el curso, obtendrás una credencial PADI válida a nivel mundial que te permitirá bucear hasta 18 metros de profundidad acompañado por otro buzo certificado.',
    ],
  },
  requirements: {
    title: 'Requisitos para Participar',
    items: [
      'Tener mínimo 10 años de edad',
      'Saber nadar y sentirse cómodo en el agua',
      'Aprobar un cuestionario médico o contar con autorización de un médico',
      'Compromiso para asistir a todas las sesiones del curso',
    ],
  },
  whatIsIncluded: {
    title: '¿Qué Incluye tu Curso?',
    items: [
      'Certificacion Internacional PADI',
      'Acceso a la plataforma PADI eLearning®',
      '5 sesiones en aguas confinadas',
      '4 inmersiones en aguas abiertas',
      'Alquiler de equipo de buceo completo',
      'Acompañamiento de un Instructor PADI',
      'Seguro de buceo durante el curso',
    ],
  },
  gallery: {
    title: 'Momentos del Curso',
    images: [
      padi_open_water_content_1_image,
      padi_open_water_content_2_image,
      padi_open_water_content_3_image,
      padi_open_water_content_4_image,
    ],
  },
  cta: {
    title: '¿No ves una fecha que te funcione?',
    buttonText: 'Contáctanos para más opciones',
    link: '/contacto',
  },
};
