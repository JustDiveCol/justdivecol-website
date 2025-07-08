// --- IMPORTACIÓN DE ACTIVOS VISUALES ---
import trip_santa_marta_banner_image from '../../assets/trips/santaMarta/trip-santa-marta-banner-image.jpg';

import trip_santa_marta_content_1_image from '../../assets/trips/santaMarta/trip-santa-marta-content-1-image.jpg';
import trip_santa_marta_content_2_image from '../../assets/trips/santaMarta/trip-santa-marta-content-2-image.jpg';
import trip_santa_marta_content_3_image from '../../assets/trips/santaMarta/trip-santa-marta-content-3-image.jpg';
import trip_santa_marta_content_4_image from '../../assets/trips/santaMarta/trip-santa-marta-content-4-image.jpg';

export const expedicionSantaMartaData = {
  // --- METADATOS (¡MUY IMPORTANTE!) ---
  id: 'expedicion-santa-marta-sept-2025',
  destinationId: 'santa-marta',
  name: 'Viaje de certificación Open Water: Santa Marta',
  type: 'trip',

  seo: {
    title:
      'Certificación PADI Open Water en Santa Marta | Viaje de Buceo Tayrona',
    description:
      'Obtén tu licencia de buceo PADI Open Water en un viaje inolvidable a Santa Marta. Aprende en las aguas cristalinas del Parque Tayrona con JustDiveCol. ¡Paquete todo incluido!',
  },

  // --- CONTENIDO DE LA PÁGINA ---
  header: {
    title: 'Tu aventura submarina comienza aquí',
    subtitle:
      'Obtén tu certificación PADI Open Water en las aguas mágicas de Santa Marta.',
    bannerImageUrl: trip_santa_marta_banner_image,
  },

  description: {
    title: 'Donde nace un nuevo explorador',
    paragraphs: [
      'Imagina tu primera inmersión en las aguas cristalinas del Caribe. Este viaje está diseñado desde cero para ti. Te guiaremos paso a paso en las bahías protegidas del Tayrona, tu aula submarina, donde te maravillarás con la colorida vida marina mientras obtienes la certificación de buceo más reconocida del mundo.',
      'No es solo un curso, es el inicio de una pasión que te llevará a explorar el 70% del planeta. En JustDiveCol, nos aseguramos de que tu primera experiencia sea segura, inolvidable y llena de descubrimientos.',
    ],
  },

  details: {
    title: 'Detalles del viaje',
    startDate: '2025-09-26',
    endDate: '2025-09-29',
    items: [
      {
        label: 'Precio',
        value: 'COP 3.500.000',
      },
      {
        label: 'Inmersiones',
        value: '5 en aguas confinadas + 4 en aguas abiertas',
      },
      { label: 'Nivel mínimo', value: 'Ninguno (Ganas de explorar)' },
      { label: 'Edad mínima', value: '10 años*' },
    ],
  },

  itinerary: {
    title: 'Tu camino para convertirte en buzo',
    days: [
      {
        day: 1,
        title: 'Llegada y fundamentos en aguas confinadas',
        description:
          'Arribo a Santa Marta. Tras el almuerzo y una charla introductoria, daremos inicio a tu aventura con la primera sesión de habilidades en aguas confinadas. Cerraremos el día con una cena de bienvenida.',
      },
      {
        day: 2,
        title: '¡Al mar! Primeras inmersiones',
        description:
          'Después del desayuno, nos prepararemos para realizar tus primeras dos inmersiones en aguas abiertas. Por la tarde, tendrás tiempo libre para relajarte antes de nuestra noche de trivia.',
      },
      {
        day: 3,
        title: 'Completando la certificación y celebración',
        description:
          'Realizamos las dos últimas inmersiones para completar los requisitos de tu certificación. Por la noche, celebraremos tu logro en nuestra ceremonia de graduación de nuevos buzos.',
      },
      {
        day: 4,
        title: 'Despedida de un nuevo buzo',
        description:
          'Disfruta de un último desayuno como buzo certificado antes de realizar el check-out del hotel. ¡El océano te espera!',
      },
    ],
    notes: [
      'Para asegurar que tengas tiempo suficiente y cumplas con las recomendaciones de no volar después de bucear, te recomendamos comprar tu vuelo de regreso para después del mediodía del último día.',
      'Para viajes con menores, es obligatorio presentar autorización notariada del acudiente legal. JustDiveCol cumple con la Ley 679 para la protección de los menores.',
    ],
  },

  whatIsIncluded: {
    title: '¿Qué incluye tu viaje?',
    items: [
      '5 sesiones virtuales de asesoría previas al viaje',
      'Alojamiento por 3 noches y 4 días en hotel seleccionado',
      'Alimentación: Cenas (3), Desayunos (3) y Snacks en las salidas de buceo',
      'Todos los traslados: Aeropuerto-Hotel-Aeropuerto y a todas las actividades',
      'Cubrimiento fotográfico para que atesores el recuerdo',
    ],
  },

  whatIsNotIncluded: {
    title: '¿Qué NO incluye?',
    items: [
      'Tiquetes aéreos hacia y desde Santa Marta',
      'Bebidas alcohólicas y comidas no especificadas',
      'Propinas para guías y tripulación (sugerido: 10-15% del valor del plan)',
      'Otros gastos personales no mencionados',
    ],
  },

  offeredCourses: {
    title: 'Certificación principal',
    ids: ['padi-open-water-diver'],
  },

  gallery: {
    title: 'Momentos de la expedición',
    images: [
      trip_santa_marta_content_1_image,
      trip_santa_marta_content_2_image,
      trip_santa_marta_content_3_image,
      trip_santa_marta_content_4_image,
    ],
  },

  cta: {
    title: '¿Listo para tu primera inmersión?',
    buttonText: 'Comienza tu aventura',
    link: '/contacto',
  },
};
