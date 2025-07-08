// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
import destination_santa_marta_card_image from '../../assets/destinations/santaMarta/destination-santa-marta-card-image.jpg';

import destination_santa_marta_banner_image from '../../assets/destinations/santaMarta/destination-santa-marta-banner-image.jpg';

import destination_santa_marta_content_1_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-1-image.jpg';
import destination_santa_marta_content_2_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-2-image.jpg';
import destination_santa_marta_content_3_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-3-image.jpg';
import destination_santa_marta_content_4_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-4-image.jpg';
import destination_santa_marta_content_5_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-5-image.jpg';
import destination_santa_marta_content_6_image from '../../assets/destinations/santaMarta/destination-santa-marta-content-6-image.jpg';

export const santaMartaDestinationData = {
  // --- METADATOS ---
  id: 'santa-marta',
  name: 'Santa Marta',

  // --- CONTENIDO PARA LA TARJETA ---
  description:
    'Donde la majestuosidad de la Sierra Nevada se encuentra con el misterio del Caribe, un destino ideal para aprender y explorar.',
  imageUrl: destination_santa_marta_card_image,
  link: '/destinos/santa-marta',

  // --- DATOS PARA LA LANDING PAGE ---
  headerImageUrl: destination_santa_marta_banner_image,
  destinationInfo: {
    title: 'Un viaje a la historia y cultura caribeña',
    paragraphs: [
      'Más allá de sus arrecifes, Santa Marta es una ciudad con una rica historia de piratas, colonos y cultura Tayrona. Su música, su gastronomía y la calidez de su gente son tan vibrantes como su vida marina.',
      'Explorar la región es descubrir una mezcla única de influencias que han dado forma a este paraíso. Desde el centro histórico hasta las playas del Tayrona, cada rincón cuenta una historia.',
    ],
  },
  diveSites: {
    title: 'Sitios de buceo emblemáticos',
    sites: [
      {
        name: 'Barco Hundido',
        description:
          'Un antiguo barco mercante descansa entre los 21 y 30 metros de profundidad, ofreciendo una experiencia única para buzos avanzados. Sus estructuras cubiertas de vida marina son hogar de cardúmenes y escenarios fotogénicos ideales para quienes buscan aventura entre naufragios.',
      },
      {
        name: 'Natalia',
        description:
          'Un yate hundido a unos 30 metros en la zona de El Rodadero. Su historia misteriosa, vinculada con el narcotráfico, y su acceso a la deriva lo convierten en un sitio exigente y fascinante para buzos con experiencia. Visibilidad limitada y corrientes hacen de Natalia una inmersión desafiante y gratificante.',
      },
      {
        name: 'La Piedra del Medio',
        description:
          'Parte de un sistema rocoso cercano a la costa, este sitio alberga una rica biodiversidad. Con profundidades entre los 14 y 21 metros y condiciones generalmente calmadas, es ideal para encuentros cercanos con tortugas y otras especies en un entorno accesible y relajado.',
      },
      {
        name: 'Isla Aguja',
        description:
          'Un clásico del buceo en Santa Marta, Isla Aguja ofrece múltiples puntos de inmersión aptos tanto para entrenamiento como para exploración profunda. Desde arrecifes poco profundos hasta zonas con corriente para buzos más avanzados, su variedad de fondos (coral, roca, arena) garantiza una experiencia completa.',
      },
    ],
  },
  gallery: {
    title: 'Momentos en el destino',
    images: [
      destination_santa_marta_content_1_image,
      destination_santa_marta_content_2_image,
      destination_santa_marta_content_3_image,
      destination_santa_marta_content_4_image,
      destination_santa_marta_content_5_image,
      destination_santa_marta_content_6_image,
    ],
  },

  details: {
    title: 'Información clave',
    items: [
      { label: 'Nivel requerido', value: 'Todos los niveles' },
      { label: 'Temperatura del agua', value: '24-28°C' },
      { label: 'Visibilidad', value: '10-20 metros' },
      {
        label: 'Limitaciones',
        value: 'La visibilidad puede variar según la temporada.',
      },
    ],
  },

  uniqueFinds: {
    title: 'No te puedes perder',
    items: [
      'La increíble biodiversidad del Parque Nacional Natural Tayrona.',
      'Las formaciones rocosas y coralinas únicas de la región.',
      'La vibrante vida nocturna y cultural de Santa Marta y Taganga.',
      'La oportunidad de obtener tu primera certificación en un entorno espectacular.',
    ],
  },
};
