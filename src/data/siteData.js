// ========================================================================
// ARCHIVO: src/data/siteData.js
// UBICACIÓN: Este archivo debe estar en tu carpeta `src/data/`.
//
// PROPÓSITO:
// Este es el archivo "panel de control" para el contenido de las páginas
// principales del sitio (Home, Nosotros, Seguridad, etc.).
// Aquí puedes editar textos, subtítulos, enlaces e imágenes sin tocar
// el código de los componentes de React.
// ========================================================================

// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
// Home Page
import hero_banner_image from '../assets/home/hero-banner-image.jpg';

import cta_home_banner_image from '../assets/home/cta-home-banner-image.jpg';

// Experience Page
import experience_banner_image from '../assets/experiences/experience-banner-image.jpg';
import experience_certification_image from '../assets/experiences/experience-certification-image.jpg';
import experience_trips_image from '../assets/experiences/experience-trips-image.jpg';
import experience_private_image from '../assets/experiences/experience-private-image.jpg';

import experience_private_banner_image from '../assets/experiences/experience-private-banner-image.jpg';

import aboutUsFeatured from '../assets/about-us-featured.jpeg';
import aboutUsCamilo from '../assets/about-us-camilo.png';
import aboutUsAlejandra from '../assets/about-us-alejandra.png';
import aboutUsPablo from '../assets/about-us-pablo.png';

// ========================================================================
// --- DATOS PARA LA PÁGINA DE INICIO (HOME) ---
// ========================================================================

/**
 * Define la información base para las categorías de experiencias.
 * Esto evita duplicar datos y facilita el mantenimiento.
 * Si necesitas cambiar un título o una imagen, solo lo haces aquí.
 */
const experienceCategories = [
  {
    id: 'certificacion',
    title: 'Tu aventura comienza aquí',
    category: 'Cursos y certificaciones',
    // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
    imageUrl: experience_certification_image,
  },
  {
    id: 'exploracion',
    title: 'Destinos que te quitarán el aliento',
    category: 'Viajes de buceo',
    // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
    imageUrl: experience_trips_image,
  },
  {
    id: 'privados',
    title: 'Diseña la aventura perfecta',
    category: 'Experiencias a tu medida',
    // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
    imageUrl: experience_private_image,
  },
];

export const heroData = {
  title: 'Sumérgete en una aventura inolvidable',
  subtitle:
    'Explora las maravillas submarinas de Colombia con la seguridad y la pasión que nos caracteriza.',
  ctaText: 'Descubre nuestras experiencias',
  ctaLink: '/experiencias',
  // Tamaño recomendado: 1920x1080 píxeles (Fondo de Pantalla Completa)
  imageUrl: hero_banner_image,
};

export const featuredExperiencesData = {
  title: 'Experiencias que transforman',
  subtitle:
    'No importa si estás empezando o si eres un explorador experimentado, tenemos una aventura para ti.',
  categories: experienceCategories.map((cat) => ({
    ...cat,
    link:
      cat.id === 'privados'
        ? '/contacto'
        : `/experiencias#${cat.id === 'certificacion' ? 'cursos' : 'destinos'}`,
  })),
};

export const safetyData = {
  title: 'Tu única misión: Explorar',
  subtitle:
    'Bucear es una pasión que debe disfrutarse con total tranquilidad. Por eso, nuestro compromiso con los más altos estándares de seguridad es absoluto en cada inmersión.',
  points: [
    {
      id: 'guias',
      title: 'Guías expertos y certificados',
      description:
        'Nuestro equipo está formado por instructores PADI con años de experiencia...',
    },
    {
      id: 'equipos',
      title: 'Equipos de primera calidad',
      description:
        'Utilizamos equipos de marcas líderes con mantenimiento riguroso...',
    },
    {
      id: 'protocolos',
      title: 'Protocolos internacionales',
      description:
        'Seguimos estrictamente los protocolos de seguridad y emergencia de PADI...',
    },
  ],
  ctaText: 'Conoce nuestras políticas',
  ctaLink: '/seguridad',
};

export const testimonialsData = {
  title: 'Ecos de las profundidades',
  testimonials: [
    // {
    //   id: 1,
    //   quote:
    //     'Una experiencia increíble. El equipo de JustDiveCol es profesional, amable y te hacen sentir seguro...',
    //   name: 'Ana Sofía R.',
    //   origin: 'Buceo en San Andrés',
    //   rating: 5,
    //   // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
    //   avatarUrl: 'https://placehold.co/100x100/E0E0E0/0A264F?text=AR',
    // },
    // {
    //   id: 2,
    //   quote:
    //     'Hice mi certificación Open Water con ellos y no podría estar más feliz. Paciencia, dedicación y mucha pasión...',
    //   name: 'Javier Mendoza',
    //   origin: 'Certificación PADI',
    //   rating: 5,
    //   // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
    //   avatarUrl: 'https://placehold.co/100x100/E0E0E0/0A264F?text=JM',
    // },
    // {
    //   id: 3,
    //   quote:
    //     'Organizaron un viaje privado para mi grupo de amigos y superaron todas las expectativas...',
    //   name: 'Carolina Vélez',
    //   origin: 'Viaje Privado a Providencia',
    //   rating: 5,
    //   // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
    //   avatarUrl: 'https://placehold.co/100x100/E0E0E0/0A264F?text=CV',
    // },
  ],
};

export const finalCtaData = {
  title: '¿Listo para tu próxima aventura?',
  subtitle:
    'Las profundidades te esperan. Contáctanos para planificar tu viaje, resolver tus dudas o simplemente para hablar sobre buceo.',
  ctaText: 'Hablemos',
  ctaLink: '/contacto',
  imageUrl: cta_home_banner_image,
};

// ========================================================================
// --- DATOS PARA LA PÁGINA DE EXPERIENCIAS ---
// ========================================================================

export const experiencesPageData = {
  seo: {
    title: 'Experiencias de Buceo',
    description:
      'Explora nuestro catálogo completo de certificaciones PADI y expediciones de buceo en los mejores destinos de Colombia y el mundo con JustDiveCol.',
  },
  header: {
    title: 'Un océano de posibilidades',
    subtitle:
      'Desde tu primera respiración bajo el agua hasta expediciones en los rincones más remotos de Colombia, cada inmersión con nosotros es una historia por contar. Elige tu próxima aventura.',
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl: experience_banner_image,
  },
  categories: experienceCategories.map((cat) => ({
    ...cat,
    link:
      cat.id === 'privados'
        ? '/contacto'
        : `#${cat.id === 'certificacion' ? 'cursos' : 'destinos'}`,
  })),
  upcomingTrips: {
    title: 'Calendario de próximas aventuras',
    subtitle:
      'Estas son nuestras próximas salidas programadas. ¡Asegura tu cupo antes de que se agoten!',
  },
  fullCatalog: {
    courses: {
      sectionId: 'cursos',
      title: 'Tu próximo nivel: Cursos y certificaciones',
      itemIds: [
        'padi-open-water-diver',
        'padi-advanced-open-water',
        'padi-rescue-diver',
      ],
    },
    destinations: {
      sectionId: 'destinos',
      title: 'Destinos memorables',
    },
  },
  customTripCta: {
    title: '¿No encuentras tu aventura ideal?',
    subtitle:
      'La expedición de tus sueños puede ser una realidad. Contáctanos y diseñemos juntos una experiencia privada, totalmente a la medida de tus expectativas.',
    ctaText: 'Diseña tu Viaje',
    ctaLink: '/contacto',
    // Tamaño recomendado: 1920x600 píxeles (Banner)
    imageUrl: experience_private_banner_image,
  },
};

// ========================================================================
// --- DATOS PARA OTRAS PÁGINAS ---
// ========================================================================

// Contenido para la página "Nosotros".
export const nosotrosPageData = {
  seo: {
    title: 'Sobre Nosotros',
    description:
      'Conoce la historia, el equipo y el compromiso de JustDiveCol, tu centro de experiencias de buceo de confianza en Colombia.',
  },
  header: {
    title: 'Más que un centro de buceo',
    subtitle:
      'Somos una comunidad de exploradores apasionados por descubrir y proteger las maravillas del océano.',
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl: aboutUsFeatured,
  },
  history: {
    title: 'Nuestra historia: El origen de una pasión',
    paragraphs: [
      'JustDiveCol nació como un sueño entre amigos, unidos por la pasión por el mar y la aventura. Lo que comenzó como simples inmersiones pronto se convirtió en el deseo de compartir experiencias y crear una comunidad de buceadores.',
      'Desde nuestra primera inmersión, supimos que queríamos transmitir esa emoción a más personas, siempre priorizando la seguridad, el aprendizaje y el respeto por el océano.',
      'Hoy ese sueño es realidad. JustDiveCol es una familia que sigue creciendo, llevando la magia del buceo a quienes buscan nuevas aventuras y momentos inolvidables bajo el agua.',
    ],
    // Tamaño recomendado: 800x1000 píxeles (Vertical)
    imageUrl:
      'https://placehold.co/800x1000/133e70/FFFFFF?text=Fundadores+Buceando',
  },
  team: {
    title: 'Los Protagonistas de la Aventura',
    subtitle:
      'Apasionados, experimentados y comprometidos con tu seguridad y diversión. Este es el equipo que te acompañará en cada inmersión.',
    members: [
      {
        id: 'miembro1',
        name: 'Camilo Beltrán',
        role: 'Navegante de Sueños Submarinos',
        bio: 'Camilo encontró en el mar un lugar de paz y decidió fundar JustDiveCol para compartir esa pasión. Su misión es enamorar a más personas del océano a través de experiencias seguras, memorables y de alto nivel, demostrando que la aventura y la tranquilidad pueden coexistir bajo el agua.',
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsCamilo,
        funFacts: [
          'Ingeniero de sistemas en la superficie, pero bajo el agua su mejor “reset” es una buena inmersión.',
          'Su momento más emocionante: un cara a cara con un tiburón toro, sin perder la calma ni el regulador.',
          'Lleva más registros de inmersiones que de reuniones de trabajo.',
        ],
      },
      {
        id: 'miembro2',
        name: 'Alejandra Vargas',
        role: 'Timonel de Ideas Frescas y Nuevos Rumbo',
        bio: 'Alejandra conoce cada rincón de los arrecifes...',
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsAlejandra,
        funFacts: ['FunFact1', 'FunFact2', 'FunFact3'],
      },
      {
        id: 'miembro3',
        name: 'Pablo Orjuela',
        role: 'Cronista de Tesoros Submarinos',
        bio: 'Pablo no solo te guiará bajo el agua...',
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsPablo,
        funFacts: ['FunFact1', 'FunFact2', 'FunFact3'],
      },
    ],
  },
  commitment: {
    title: 'Nuestro compromiso inquebrantable',
    subtitle:
      'Creemos que explorar el océano conlleva la gran responsabilidad de protegerlo...',
    points: [
      {
        id: 'sostenibilidad',
        title: 'Sostenibilidad y conservación',
        description:
          'Promovemos prácticas de buceo de bajo impacto, respetando la vida marina y apoyando iniciativas para proteger nuestros océanos. Cada inmersión es una oportunidad para aprender, cuidar y dejar el mar mejor de como lo encontramos.',
        icon: 'leaf',
      },
      {
        id: 'seguridad',
        title: 'Seguridad sin concesiones',
        description:
          'Tu bienestar es nuestra máxima prioridad, por eso seguimos los más altos estándares de seguridad en cada experiencia. Nos preparamos y capacitamos constantemente para garantizar que disfrutes del buceo con confianza y tranquilidad.',
        icon: 'shield',
      },
      {
        id: 'comunidad',
        title: 'Apoyo a comunidades locales',
        description:
          'Trabajamos de la mano con operadores y comunidades, creando alianzas que impulsan el turismo responsable y generan bienestar local. Creemos que el buceo es más valioso cuando también aporta a las personas y lugares que visitamos.',
        icon: 'heart',
      },
    ],
  },
};

// Contenido para la página "Seguridad".
export const seguridadPageData = {
  seo: {
    title: 'Compromiso con la seguridad',
    description:
      'Descubre nuestros rigurosos protocolos de seguridad, equipamiento de primera y alianzas que garantizan una experiencia de buceo segura con JustDiveCol.',
  },
  header: {
    title: 'Seguridad sin concesiones',
    subtitle:
      'Tu tranquilidad es la base de una aventura inolvidable. En JustDiveCol, la seguridad es el pilar fundamental de cada inmersión: seguimos los más altos estándares y cuidamos cada detalle para que solo te preocupes por disfrutar el mar.',
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl:
      'https://placehold.co/1920x500/0A264F/FFFFFF?text=Equipo+de+Buceo',
  },
  protocols: {
    title: 'Nuestro estándar de seguridad',
    subtitle:
      'Seguimos un riguroso proceso en cada una de nuestras operaciones, priorizando el bienestar y la confianza de nuestros buzos en cada etapa de la experiencia.',
    steps: [
      {
        id: 'step1',
        name: '1. Briefing detallado',
        description:
          'Antes de cada inmersión, realizamos una sesión informativa completa: revisamos las condiciones, explicamos el plan de buceo y recordamos todos los procedimientos de seguridad.',
      },
      {
        id: 'step2',
        name: '2. Chequeo pre-inmersión',
        description:
          'Antes de entrar al agua, revisamos juntos el equipo paso a paso: aseguramos que todo esté en orden, funcione correctamente y que sepas cómo usarlo, para que bucees con confianza.',
      },
      {
        id: 'step3',
        name: '3. Guiado profesional',
        description:
          'Nuestros guías certificados lideran grupos pequeños para brindar atención personalizada y garantizar una experiencia segura en todo momento.',
      },
      {
        id: 'step4',
        name: '4. Monitoreo y debriefing',
        description:
          'Durante y después de la inmersión, monitoreamos el consumo de aire, la comunicación y el bienestar de cada participante. Finalizamos con un debriefing para resolver dudas y compartir aprendizajes.',
      },
    ],
  },
  equipment: {
    title: 'Equipamiento de vanguardia',
    subtitle:
      'Confiamos únicamente en marcas líderes en la industria, asegurando la máxima seguridad y comodidad en cada inmersión.',
    items: [
      {
        id: 'reguladores',
        name: 'Reguladores',
        description:
          'Utilizamos reguladores de alto rendimiento que garantizan una respiración suave y segura, incluso en condiciones exigentes.',
        icon: 'regulator',
      },
      {
        id: 'bcds',
        name: 'Chalecos compensadores (BCDs)',
        description:
          'Nuestros BCDs son cómodos, hidrodinámicos y ofrecen un control preciso de la flotabilidad, permitiendo moverse con confianza bajo el agua.',
        icon: 'bcd',
      },
      {
        id: 'computadores',
        name: 'Computadores de buceo',
        description:
          'Cada inmersión es monitoreada con computadores modernos, que nos ayudan a mantenernos dentro de los límites seguros y a registrar todos los datos importantes.',
        icon: 'computer',
      },
    ],
  },
  certifications: {
    title: 'Compromiso con buenas prácticas',
    subtitle:
      'En JustDiveCol, seguimos estándares internacionales de seguridad y sostenibilidad, y estamos en proceso de afiliarnos a las principales organizaciones del sector.',
    partners: [
      {
        id: 'buenas-practicas',
        name: 'Estándares internacionales',
        description:
          'Nuestras operaciones se basan en los protocolos y recomendaciones de entidades reconocidas como PADI y DAN. Mantenemos a nuestro equipo en formación continua y aplicamos las mejores prácticas del sector.',
        // Tamaño recomendado: 300x150 píxeles (Banner Panorámico)
        logoUrl:
          'https://placehold.co/300x150/FFFFFF/0A264F?text=BUENAS+PRACTICAS',
      },
      {
        id: 'capacitacion',
        name: 'Capacitación y actualización',
        description:
          'Nuestro equipo participa en cursos de primeros auxilios, actualización en seguridad y talleres de sostenibilidad marina para garantizar el bienestar de nuestros clientes y del océano.',
        // Tamaño recomendado: 300x150 píxeles (Banner Panorámico)
        logoUrl: 'https://placehold.co/300x150/FFFFFF/0A264F?text=CAPACITACION',
      },
    ],
  },
};

// Contenido para la página "Contacto".
export const contactoPageData = {
  seo: {
    title: 'Contacto',
    description:
      '¿Listo para tu próxima aventura? Contáctanos para planificar tu viaje, resolver tus dudas o simplemente para hablar sobre buceo.',
  },
  header: {
    title: 'Hablemos de tu próxima aventura',
    subtitle:
      'Estamos aquí para responder tus preguntas, planificar tu viaje soñado...',
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl: 'https://placehold.co/1920x500/0A264F/FFFFFF?text=Contáctanos',
  },
  contactInfo: {
    title: 'Canales de comunicación',
    email: 'info@justdivecol.com',
    phone: '+57 311 522 0316',
    socials: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/justdivecol/',
        icon: 'instagram',
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@just.dive.col',
        icon: 'tiktok',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@JustDiveCol',
        icon: 'youtube',
      },
    ],
  },
  whatsAppAction: {
    title: 'Envíanos un mensaje',
    description:
      '¿Tienes una pregunta rápida o prefieres una conversación más directa? Haz clic en el botón para iniciar un chat con nosotros en WhatsApp.',
    buttonText: 'Iniciar conversación por WhatsApp',
    prefilledMessage:
      'Hola, equipo de JustDiveCol. Me gustaría recibir más información sobre...',
  },
};

// Contenido para footer
export const footerData = {
  slogan:
    'Creando exploradores, no turistas. Tu aventura submarina en Colombia empieza aquí.',
  closingMessage: 'No solo buceamos. Creamos recuerdos que duran toda la vida.',
  copyright: 'JustDiveCol. Todos los derechos reservados.',
  credits: 'Diseñado y construido para exploradores submarinos.',
};

// Contenido para la página "En Construcción".
export const underConstructionData = {
  title: 'PREPARANDO EL EQUIPO',
  subtitle:
    'Estamos haciendo nuestra parada de seguridad... ¡Esta sección estará lista para tu próxima inmersión muy pronto! Gracias por tu paciencia.',
  // Tamaño recomendado: 1920x1080 píxeles (Fondo de Pantalla Completa)
  imageUrl:
    'https://placehold.co/1920x1080/0A264F/FFFFFF?text=Mapa+de+un+nuevo+sitio+de+buceo',
  ctaText: 'Volver al Inicio',
  ctaLink: '/',
};
