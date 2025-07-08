import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Se importan las animaciones reutilizables para mantener la consistencia.
import { staggerContainer, fadeInFromBottom } from '../utils/animations';

import PageHeader from '../components/PageHeader';

import { paymentData } from '../data/paymentData';
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

const CreditCardIcon = () => (
  <svg
    xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    />
  </svg>
);
const BankIcon = () => (
  <svg
    xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5h2m-2 2h2'
    />
  </svg>
);
const LinkIcon = () => (
  <svg
    xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
    />
  </svg>
);

// --- Componente Principal de la Plantilla ---

/**
 * Plantilla de diseño reutilizable para todas las páginas de viajes y expediciones.
 * Este es un componente "tonto" que solo se encarga de mostrar los datos que recibe.
 * @param {object} tripData - Objeto con toda la información del viaje.
 * @param {Array} offeredCoursesData - Array de objetos con la información de los cursos disponibles en este viaje.
 */
const TripTemplate = ({ tripData, offeredCoursesData }) => {
  // Desestructuración de los datos para un uso más limpio en el JSX.
  const {
    header,
    description,
    details,
    itinerary,
    whatIsIncluded,
    whatIsNotIncluded,
    offeredCourses,
    gallery,
    cta,
  } = tripData;

  // Lógica para unir las listas de "Qué Incluye" del viaje y del primer curso ofrecido.
  // Esto permite mostrar un paquete completo al usuario.
  const combinedIncludedItems = [
    ...(offeredCoursesData[0]?.whatIsIncluded?.items || []),
    ...(whatIsIncluded?.items || []),
  ];

  const paymentIcons = {
    card: <CreditCardIcon />,
    bank: <BankIcon />,
    link: <LinkIcon />,
  };

  const whatsappUrl = `https://wa.me/${contactoPageData.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(
    `Hola, equipo de JustDiveCol. Me gustaría recibir más información sobre el viaje ${tripData.name}.`
  )}`;

  return (
    // El contenedor principal orquesta la animación en cascada de sus hijos.
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='bg-brand-primary-dark text-brand-neutral'>
      {/* Cada sección principal es un hijo animado. */}
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        imageUrl={header.bannerImageUrl}
      />

      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        {/* Columna de contenido principal */}
        <main className='lg:col-span-2 space-y-16'>
          {/* Sección de Cursos Disponibles */}
          {offeredCoursesData?.length > 0 && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                {offeredCourses.title}
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {offeredCoursesData.map((course) => (
                  <Link
                    key={course.id}
                    to={`/certificaciones/${course.id}`}
                    className='block bg-brand-primary-medium p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                    <h3 className='text-xl font-sans font-bold text-brand-white'>
                      {course.name}
                    </h3>
                    <p className='mt-1 font-serif text-brand-neutral/80'>
                      {course.header.subtitle}
                    </p>
                    <span className='mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange'>
                      Ver detalles &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Sección de Descripción */}
          <motion.section variants={fadeInFromBottom}>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
              {description.title}
            </h2>
            <div className='space-y-4 font-serif text-lg text-brand-neutral/90'>
              {description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.section>

          {/* Sección de Itinerario */}
          <motion.section variants={fadeInFromBottom}>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
              {itinerary.title}
            </h2>
            <div className='border-l-2 border-brand-cta-green/50 pl-6 space-y-8'>
              {itinerary.days.map((day) => (
                <div key={day.day}>
                  <h3 className='text-xl font-sans font-semibold text-brand-cta-green'>
                    Día {day.day}: {day.title}
                  </h3>
                  <p className='mt-1 font-serif text-brand-neutral/90'>
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
            {itinerary.notes && itinerary.notes.length > 0 && (
              <div className='mt-6 space-y-2'>
                {itinerary.notes.map((note, index) => (
                  <div
                    key={index}
                    className='flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80'>
                    <InfoIcon />
                    <p className='font-serif text-sm'>{note}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Sección de Galería */}
          {gallery && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                {gallery.title}
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                {gallery.images.map((img, i) => (
                  <div
                    key={i}
                    className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      src={img}
                      alt={`${header.title} foto ${i + 1}`}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </main>

        {/* Barra lateral con información clave */}
        <motion.aside
          variants={fadeInFromBottom}
          className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {/* Detalles del Viaje */}
          <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-sans font-bold text-brand-white mb-4'>
              {details.title}
            </h3>
            <ul className='space-y-3 font-serif'>
              <li
                key='fecha'
                className='flex items-baseline justify-between gap-4'>
                <span className='text-brand-neutral/80'>Fechas:</span>
                <span className='font-bold text-brand-white text-right'>
                  {formatDateRange(details.startDate, details.endDate)}
                </span>
              </li>
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

          <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
              {paymentData.title}
            </h3>
            <ul className='space-y-4'>
              {paymentData.methods.map((method) => (
                <li
                  key={method.id}
                  className='flex items-start'>
                  <div className='flex-shrink-0 w-6 mt-1 text-brand-cta-green'>
                    {paymentIcons[method.icon]}
                  </div>
                  <div className='ml-3'>
                    <h4 className='font-sans font-semibold text-brand-white'>
                      {method.name}
                    </h4>
                    <p className='font-serif text-sm text-brand-neutral/80'>
                      {method.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Qué Incluye */}
          <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
              {whatIsIncluded.title}
            </h3>
            <ul className='space-y-3'>
              {combinedIncludedItems.map((item) => (
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

          {/* Qué NO Incluye */}
          {whatIsNotIncluded && (
            <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
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

          {/* Llamado a la Acción */}
          <div className='bg-brand-primary-light p-6 rounded-lg shadow-lg text-center'>
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
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default TripTemplate;
