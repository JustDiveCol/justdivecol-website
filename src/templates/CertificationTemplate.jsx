import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';

import { formatDateRange } from '../utils/formatters';
import { contactoPageData } from '../data/siteData';

// --- Componentes de UI Internos (Iconos) ---

const CheckIcon = () => (
  <svg
    className='h-6 w-6 text-brand-cta-green'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={3}
      d='M5 13l4 4L19 7'
    />
  </svg>
);
const CrossIcon = () => (
  <svg
    className='h-6 w-6 text-red-400'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={3}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);
const InfoIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5 mr-2 flex-shrink-0'
    viewBox='0 0 20 20'
    fill='currentColor'>
    <path
      fillRule='evenodd'
      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
      clipRule='evenodd'
    />
  </svg>
);

// --- Componente Principal de la Plantilla ---

/**
 * Plantilla de diseño reutilizable para todas las páginas de certificación.
 * Este es un componente "tonto" que solo se encarga de mostrar los datos que recibe.
 * @param {object} courseData - Objeto con toda la información del curso.
 * @param {Array} availableTrips - Array de objetos con la información de los viajes disponibles para este curso.
 */
const CertificationTemplate = ({ courseData, availableTrips }) => {
  // Desestructuración de los datos para un uso más limpio en el JSX.
  const {
    header,
    description,
    requirements,
    details,
    curriculum,
    whatIsIncluded,
    whatIsNotIncluded,
    gallery,
    cta,
  } = courseData;

  const whatsappUrl = `https://wa.me/${contactoPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(
    `Hola, equipo de JustDiveCol. Me gustaría recibir más información sobre el curso ${courseData.name}.`
  )}`;

  return (
    // Este `motion.div` es el contenedor que será animado por la página que lo usa.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {/* Encabezado de la página */}
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        imageUrl={header.bannerImageUrl}
      />

      {/* Contenedor principal del contenido (layout de 2 columnas en escritorio) */}
      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Columna de contenido principal */}
        <main className='lg:col-span-2 space-y-16'>
          {/* Sección de Descripción */}
          <section>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
              {description.title}
            </h2>
            <div className='space-y-4 font-serif text-lg text-brand-neutral/90'>
              {description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Sección de Currículo */}
          <section>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
              {curriculum.title}
            </h2>
            <div className='space-y-6'>
              {curriculum.modules.map((module) => (
                <div key={module.id}>
                  <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
                    {module.name}
                  </h3>
                  <p className='mt-1 font-serif text-brand-neutral/90'>
                    {module.description}
                  </p>
                </div>
              ))}
            </div>

            {curriculum.notes && curriculum.notes.length > 0 && (
              <div className='mt-6 space-y-2'>
                {curriculum.notes.map((note, index) => (
                  <div
                    key={index}
                    className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
                    <InfoIcon />
                    <p className='font-serif text-sm'>{note}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Sección de Galería de Imágenes */}
          {gallery && (
            <section>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                {gallery.title}
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                {gallery.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${header.title} foto ${i + 1}`}
                    className='rounded-lg shadow-lg'
                  />
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Barra lateral con información clave */}
        <aside className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {/* Detalles del Curso */}
          <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
              {details.title}
            </h3>
            <ul className='space-y-3 font-serif'>
              {details.items.map((item) => (
                <li
                  key={item.label}
                  className='flex items-baseline justify-between gap-4'>
                  <span className='text-brand-neutral/80'>{item.label}:</span>
                  <span className='font-bold text-brand-white text-right'>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Requisitos */}
          {requirements && (
            <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
                {requirements.title}
              </h3>
              <ul className='space-y-3'>
                {requirements.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-start'>
                    <div className='flex-shrink-0 w-6 mt-1'>
                      <CheckIcon />
                    </div>
                    <span className='ml-2 font-serif text-brand-neutral/90'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Qué Incluye */}
          <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
              {whatIsIncluded.title}
            </h3>
            <ul className='space-y-3'>
              {whatIsIncluded.items.map((item) => (
                <li
                  key={item}
                  className='flex items-start'>
                  <div className='flex-shrink-0 w-6 mt-1'>
                    <CheckIcon />
                  </div>
                  <span className='ml-2 font-serif text-brand-neutral/90'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Qué NO Incluye (opcional) */}
          {whatIsNotIncluded && (
            <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
                {whatIsNotIncluded.title}
              </h3>
              <ul className='space-y-3'>
                {whatIsNotIncluded.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-start'>
                    <div className='flex-shrink-0 w-6 mt-1'>
                      <CrossIcon />
                    </div>
                    <span className='ml-2 font-serif text-brand-neutral/90'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Viajes Disponibles (se muestra en la barra lateral) */}
          <div
            id='available-trips-section'
            className='bg-brand-primary-medium p-6 rounded-lg shadow-lg scroll-mt-24'>
            <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
              Próximos Viajes
            </h3>
            {availableTrips && availableTrips.length > 0 ? (
              <div className='space-y-4'>
                {availableTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    to={`/expediciones/${trip.id}`}
                    className='block bg-brand-primary-dark p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300'>
                    <h4 className='font-sans font-bold text-brand-white'>
                      {trip.name}
                    </h4>
                    <p className='mt-1 font-serif text-sm text-brand-neutral/80'>
                      {formatDateRange(
                        trip.details.startDate,
                        trip.details.endDate
                      )}
                    </p>
                    <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
                      Ver detalles del viaje &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                <p className='font-serif text-sm text-brand-neutral/80'>
                  Las próximas fechas están en camino. ¡Empieza a alistar tus
                  aletas!
                </p>
              </div>
            )}
          </div>

          {/* Llamado a la Acción (CTA) condicional */}
          <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
            {availableTrips && availableTrips.length > 0 ? (
              <>
                <h3 className='text-2xl font-sans font-bold text-brand-white'>
                  ¿Listo para tu certificación?
                </h3>
                <Link
                  to='/proximamente' // Enlaza a la página de seguridad/políticas
                  className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-colors'>
                  Ver Políticas de cancelación
                </Link>
              </>
            ) : (
              <>
                <h3 className='text-2xl font-sans font-bold text-brand-white'>
                  {cta.title}
                </h3>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  to={whatsappUrl}
                  className='mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-colors'>
                  {cta.buttonText}
                </Link>
              </>
            )}
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default CertificationTemplate;
