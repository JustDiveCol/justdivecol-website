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
// Aquí se importan todas las imágenes locales para que Vite las procese.
// Asegúrate de que la ruta sea correcta desde `src/assets/`.
import heroBackgroundImage from "../assets/hero-background.jpg";
import homeFeaturedCertificacion from "../assets/home-featured-certificacion.jpg";
import homeFeaturedExploracion from "../assets/home-featured-exploracion.jpg";
import homeFeaturedPrivados from "../assets/home-featured-privados.jpg";
import experienceCustomTrip from "../assets/experience-custom-trip.jpg";
import aboutUsFeatured from "../assets/about-us-featured.jpeg";
import aboutUsCamilo from "../assets/about-us-camilo.png";
import aboutUsAlejandra from "../assets/about-us-alejandra.png";
import aboutUsPablo from "../assets/about-us-pablo.png";

// ========================================================================
// --- DATOS PARA LA PÁGINA DE INICIO (HOME) ---
// ========================================================================

export const heroData = {
  title: "SUMÉRGETE EN UNA AVENTURA INOLVIDABLE",
  subtitle:
    "Explora las maravillas submarinas de Colombia con la seguridad y la pasión que nos caracteriza.",
  ctaText: "DESCUBRE NUESTRAS EXPERIENCIAS",
  ctaLink: "/experiencias",
  // Tamaño recomendado: 1920x1080 píxeles (Fondo de Pantalla Completa)
  imageUrl: heroBackgroundImage,
};

export const featuredExperiencesData = {
  title: "EXPERIENCIAS QUE TRANSFORMAN",
  subtitle:
    "No importa si estás empezando o si eres un explorador experimentado, tenemos una aventura para ti.",
  categories: [
    {
      id: "certificacion",
      title: "Tu Aventura Comienza Aquí",
      category: "TU PRÓXIMO NIVEL",
      // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
      imageUrl: homeFeaturedCertificacion,
      link: "/experiencias#cursos",
    },
    {
      id: "exploracion",
      title: "Destinos que Te Quitarán el Aliento",
      category: "EXPEDICIONES MEMORABLES",
      // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
      imageUrl: homeFeaturedExploracion,
      link: "/experiencias#expediciones",
    },
    {
      id: "privados",
      title: "Diseña la Aventura Perfecta",
      category: "EL OCÉANO A TU RITMO",
      // Tamaño recomendado: 600x800 píxeles (Tarjeta Vertical)
      imageUrl: homeFeaturedPrivados,
      link: "/contacto",
    },
  ],
};

export const safetyData = {
  title: "TU ÚNICA MISIÓN: EXPLORAR",
  subtitle:
    "Bucear es una pasión que debe disfrutarse con total tranquilidad. Por eso, nuestro compromiso con los más altos estándares de seguridad es absoluto en cada inmersión.",
  points: [
    { id: "guias", title: "Guías Expertos y Certificados", description: "Nuestro equipo está formado por instructores PADI con años de experiencia..." },
    { id: "equipos", title: "Equipos de Primera Calidad", description: "Utilizamos equipos de marcas líderes con mantenimiento riguroso..." },
    { id: "protocolos", title: "Protocolos Internacionales", description: "Seguimos estrictamente los protocolos de seguridad y emergencia de PADI..." },
  ],
  ctaText: "CONOCE NUESTRAS POLÍTICAS",
  ctaLink: "/seguridad",
};

export const testimonialsData = {
  title: "ECOS DE LAS PROFUNDIDADES",
  testimonials: [
    {
      id: 1,
      quote: "Una experiencia increíble. El equipo de JustDiveCol es profesional, amable y te hacen sentir seguro...",
      name: "Ana Sofía R.",
      origin: "Buceo en San Andrés",
      rating: 5,
      // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
      avatarUrl: "https://placehold.co/100x100/E0E0E0/0A264F?text=AR",
    },
    {
      id: 2,
      quote: "Hice mi certificación Open Water con ellos y no podría estar más feliz. Paciencia, dedicación y mucha pasión...",
      name: "Javier Mendoza",
      origin: "Certificación PADI",
      rating: 5,
      // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
      avatarUrl: "https://placehold.co/100x100/E0E0E0/0A264F?text=JM",
    },
    {
      id: 3,
      quote: "Organizaron un viaje privado para mi grupo de amigos y superaron todas las expectativas...",
      name: "Carolina Vélez",
      origin: "Viaje Privado a Providencia",
      rating: 5,
      // Tamaño recomendado: 400x400 píxeles (Avatar Cuadrado)
      avatarUrl: "https://placehold.co/100x100/E0E0E0/0A264F?text=CV",
    },
  ],
};

export const finalCtaData = {
  title: "¿LISTO PARA TU PRÓXIMA AVENTURA?",
  subtitle:
    "Las profundidades te esperan. Contáctanos para planificar tu viaje, resolver tus dudas o simplemente para hablar sobre buceo.",
  ctaText: "HABLEMOS",
  ctaLink: "/contacto",
};

// ========================================================================
// --- DATOS PARA LA PÁGINA DE EXPERIENCIAS ---
// ========================================================================

export const experiencesPageData = {
  seo: {
    title: "Experiencias de Buceo",
    description: "Explora nuestro catálogo completo de certificaciones PADI y expediciones de buceo en los mejores destinos de Colombia y el mundo con JustDiveCol."
  },
  header: {
    title: "UN OCÉANO DE POSIBILIDADES",
    subtitle:
      "Desde tu primera respiración bajo el agua hasta expediciones en los rincones más remotos de Colombia, cada inmersión con nosotros es una historia por contar. Elige tu próxima aventura.",
  },
  categories: [
    {
      id: "certificacion",
      title: "Tu Aventura Comienza Aquí",
      category: "TU PRÓXIMO NIVEL",
      imageUrl: homeFeaturedCertificacion,
      link: "#cursos",
    },
    {
      id: "exploracion",
      title: "Destinos que Te Quitarán el Aliento",
      category: "EXPEDICIONES MEMORABLES",
      imageUrl: homeFeaturedExploracion,
      link: "#expediciones",
    },
    {
      id: "privados",
      title: "Diseña la Aventura Perfecta",
      category: "EL OCÉANO A TU RITMO",
      imageUrl: homeFeaturedPrivados,
      link: "/contacto",
    },
  ],
  upcomingTrips: {
    title: "Calendario de Próximas Aventuras",
    subtitle:
      "Estas son nuestras próximas salidas programadas. ¡Asegura tu cupo antes de que se agoten!",
  },
  fullCatalog: {
    courses: {
      sectionId: "cursos",
      title: "TU PRÓXIMO NIVEL: CURSOS Y CERTIFICACIONES",
      itemIds: [
        "padi-open-water-diver",
        "padi-advanced-open-water",
        "padi-rescue-diver",
      ],
    },
    expeditions: {
      sectionId: "expediciones",
      title: "EXPEDICIONES MEMORABLES: VIAJES DE BUCEO",
      itemIds: [
        "expedicion-santa-marta-sept-2025",
      ],
    },
  },
  customTripCta: {
    title: "¿No encuentras tu aventura ideal?",
    subtitle:
      "La expedición de tus sueños puede ser una realidad. Contáctanos y diseñemos juntos una experiencia privada, totalmente a la medida de tus expectativas.",
    ctaText: "Diseña tu Viaje",
    ctaLink: "/contacto",
    // Tamaño recomendado: 1920x600 píxeles (Banner)
    imageUrl: experienceCustomTrip,
  },
};

// ========================================================================
// --- DATOS PARA OTRAS PÁGINAS ---
// ========================================================================

// Contenido para la página "Nosotros".
export const nosotrosPageData = {
  seo: {
    title: "Sobre Nosotros",
    description: "Conoce la historia, el equipo y el compromiso de JustDiveCol, tu centro de experiencias de buceo de confianza en Colombia."
  },
  header: {
    title: "Más que un centro de buceo",
    subtitle:
      "Somos una comunidad de exploradores apasionados por descubrir y proteger las maravillas del océano.",
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl: aboutUsFeatured,
  },
  history: {
    title: "Nuestra Historia: El Origen de una Pasión",
    paragraphs: [
      "JustDiveCol nació de un sueño compartido entre amigos...",
      "Desde nuestra primera inmersión...",
      "Hoy, ese sueño es una realidad...",
    ],
    // Tamaño recomendado: 800x1000 píxeles (Vertical)
    imageUrl:
      "https://placehold.co/800x1000/133e70/FFFFFF?text=Fundadores+Buceando",
  },
  team: {
    title: "Los Protagonistas de la Aventura",
    subtitle:
      "Apasionados, experimentados y comprometidos con tu seguridad y diversión. Este es el equipo que te acompañará en cada inmersión.",
    members: [
      {
        id: "miembro1",
        name: "Camilo Beltrán",
        role: "PADI Divemaster & Fundador",
        bio: "Ingeniero de sistemas de día, explorador submarino por vocación. Camilo encontró en el mar un lugar de paz y decidió fundar JustDiveCol para compartir esa pasión. Su misión es enamorar a más personas del océano a través de experiencias seguras, memorables y de alto nivel, demostrando que la aventura y la tranquilidad pueden coexistir bajo el agua.",
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsCamilo,
        funFacts: [
          "Certificaciones Técnicas: TEC 40, 45 y 50",
          "Sitio Favorito: Providencia, por la resiliencia y calidez de su gente.",
          "Encuentro más memorable: Un cara a cara con un tiburón toro.",
        ],
      },
      {
        id: "miembro2",
        name: "Alejandra Vargas",
        role: "Divemaster & Guía de Expedición",
        bio: "Alejandra conoce cada rincón de los arrecifes...",
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsAlejandra,
        funFacts: ["FunFact1", "FunFact2", "FunFact3"],
      },
      {
        id: "miembro3",
        name: "Pablo Orjuela",
        role: "Divemaster & Fotógrafo Submarino",
        bio: "Pablo no solo te guiará bajo el agua...",
        // Tamaño recomendado: 400x400 píxeles (Cuadrado)
        imageUrl: aboutUsPablo,
        funFacts: ["FunFact1", "FunFact2", "FunFact3"],
      },
    ],
  },
  commitment: {
    title: "Nuestro Compromiso Inquebrantable",
    subtitle:
      "Creemos que explorar el océano conlleva la gran responsabilidad de protegerlo...",
    points: [
      {
        id: "sostenibilidad",
        title: "Sostenibilidad y Conservación",
        description: "Promovemos prácticas de buceo de bajo impacto...",
        icon: "leaf",
      },
      {
        id: "seguridad",
        title: "Seguridad Sin Concesiones",
        description: "Tu bienestar es nuestra máxima prioridad...",
        icon: "shield",
      },
      {
        id: "comunidad",
        title: "Apoyo a Comunidades Locales",
        description: "Trabajamos de la mano con operadores y comunidades...",
        icon: "heart",
      },
    ],
  },
};

// Contenido para la página "Seguridad".
export const seguridadPageData = {
  seo: {
    title: "Compromiso con la Seguridad",
    description: "Descubre nuestros rigurosos protocolos de seguridad, equipamiento de primera y alianzas que garantizan una experiencia de buceo segura con JustDiveCol."
  },
  header: {
    title: "Seguridad Sin Concesiones",
    subtitle: "Tu tranquilidad es la base de una aventura inolvidable...",
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl:
      "https://placehold.co/1920x500/0A264F/FFFFFF?text=Equipo+de+Buceo",
  },
  protocols: {
    title: "Nuestro Estándar de Seguridad",
    subtitle:
      "Seguimos un riguroso proceso en cada una de nuestras operaciones...",
    steps: [
      {
        id: "step1",
        name: "1. Briefing Detallado",
        description:
          "Antes de cada inmersión, realizamos una sesión informativa completa...",
      },
      {
        id: "step2",
        name: "2. Chequeo Pre-Inmersión",
        description:
          "Implementamos el chequeo de seguridad entre compañeros (BWRAF)...",
      },
      {
        id: "step3",
        name: "3. Guiado Profesional",
        description: "Nuestros guías lideran grupos pequeños...",
      },
      {
        id: "step4",
        name: "4. Monitoreo y Debriefing",
        description:
          "Durante y después de la inmersión, monitoreamos el consumo de aire...",
      },
    ],
  },
  equipment: {
    title: "Equipamiento de Vanguardia",
    subtitle: "Confiamos únicamente en marcas líderes en la industria...",
    items: [
      {
        id: "reguladores",
        name: "Reguladores",
        description:
          "Modelos de alto rendimiento que garantizan una respiración suave...",
        icon: "regulator",
      },
      {
        id: "bcds",
        name: "Chalecos Compensadores (BCDs)",
        description:
          "Chalecos hidrodinámicos y cómodos que permiten un control...",
        icon: "bcd",
      },
      {
        id: "computadores",
        name: "Computadores de Buceo",
        description:
          "Todos nuestros buceos son monitoreados con computadores modernos...",
        icon: "computer",
      },
    ],
  },
  certifications: {
    title: "Certificaciones y Alianzas que nos Respaldan",
    subtitle:
      "Nuestro compromiso está avalado por las organizaciones más respetadas...",
    partners: [
      {
        id: "padi",
        name: "PADI 5 Star Dive Center",
        description:
          "Como PADI 5 Star Dive Center, cumplimos con los más altos estándares...",
        // Tamaño recomendado: 300x150 píxeles (Banner Panorámico)
        logoUrl: "https://placehold.co/300x150/FFFFFF/0A264F?text=PADI+5+STAR",
      },
      {
        id: "dan",
        name: "DAN (Divers Alert Network)",
        description:
          "Estamos afiliados a DAN, la red de seguridad de buceo más grande...",
        // Tamaño recomendado: 300x150 píxeles (Banner Panorámico)
        logoUrl: "https://placehold.co/300x150/FFFFFF/0A264F?text=DAN",
      },
    ],
  },
};

// Contenido para la página "Contacto".
export const contactoPageData = {
  seo: {
    title: "Contacto",
    description: "¿Listo para tu próxima aventura? Contáctanos para planificar tu viaje, resolver tus dudas o simplemente para hablar sobre buceo."
  },
  header: {
    title: "Hablemos de tu Próxima Aventura",
    subtitle:
      "Estamos aquí para responder tus preguntas, planificar tu viaje soñado...",
    // Tamaño recomendado: 1920x500 píxeles (Banner Panorámico)
    imageUrl: "https://placehold.co/1920x500/0A264F/FFFFFF?text=Contáctanos",
  },
  contactInfo: {
    title: "Canales de Comunicación",
    email: "info@justdivecol.com",
    phone: "+57 311 522 0316",
    socials: [
      { name: "Instagram", link: "https://www.instagram.com/justdivecol/", icon: "instagram" },
      { name: "TikTok", link: "https://www.tiktok.com/@just.dive.col", icon: "tiktok" },
      { name: "YouTube", link: "https://www.youtube.com/@JustDiveCol", icon: "youtube" },
    ],
  },
  mailToAction: {
    title: "Envíanos un Correo Directo",
    description:
      "¿Prefieres escribirnos directamente? Haz clic en el botón de abajo...",
    buttonText: "Iniciar Conversación por Correo",
    subject: "Consulta sobre experiencias de buceo",
    body: "Hola, equipo de JustDiveCol.\n\nMe gustaría recibir más información sobre...\n\n",
  },
};

// Contenido para footer
export const footerData = {
  slogan: "Creando exploradores, no turistas. Tu aventura submarina en Colombia empieza aquí.",
  closingMessage: "No solo buceamos. Creamos recuerdos que duran toda la vida.",
  copyright: "JustDiveCol. Todos los derechos reservados.",
  credits: "Diseñado y construido para exploradores submarinos."
};

// Contenido para la página "En Construcción".
export const underConstructionData = {
  title: "PREPARANDO EL EQUIPO",
  subtitle: "Estamos haciendo nuestra parada de seguridad... ¡Esta sección estará lista para tu próxima inmersión muy pronto! Gracias por tu paciencia.",
  // Tamaño recomendado: 1920x1080 píxeles (Fondo de Pantalla Completa)
  imageUrl: "https://placehold.co/1920x1080/0A264F/FFFFFF?text=Mapa+de+un+nuevo+sitio+de+buceo",
  ctaText: "Volver al Inicio",
  ctaLink: "/",
};