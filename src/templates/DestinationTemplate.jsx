import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import { formatDateRange } from '../utils/formatters';

import PageHeader from '../components/PageHeader';

// --- Íconos y Helpers ---
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
const InfoIcon = () => (
  <svg
    xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'
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

const DestinationTemplate = ({ destinationData, upcomingTrips }) => {
  const {
    headerImageUrl,
    name,
    description,
    gallery,
    details,
    uniqueFinds,
    diveSites,
    destinationInfo,
  } = destinationData || {};

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='bg-brand-primary-dark text-brand-neutral'>
      <PageHeader
        title={name}
        subtitle={description}
        imageUrl={headerImageUrl}
      />

      <div className='container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8'>
        <main className='lg:col-span-2 space-y-16'>
          <motion.section variants={fadeInFromBottom}>
            <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
              Próximos viajes a este destino
            </h2>
            {upcomingTrips && upcomingTrips.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {upcomingTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    to={`/expediciones/${trip.id}`}
                    className='block bg-brand-primary-medium p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                    <h3 className='text-xl font-sans font-bold text-brand-white'>
                      {trip.name}
                    </h3>
                    <p className='mt-1 font-serif text-brand-neutral/80'>
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
              // Mensaje que se muestra si no hay viajes disponibles
              <div className='bg-brand-primary-medium/50 p-6 rounded-lg text-center'>
                <h1 className='font-serif text-brand-neutral/80'>
                  Las próximas fechas están en camino. ¡Empieza a alistar tus
                  aletas!
                </h1>
              </div>
            )}
          </motion.section>

          {destinationInfo?.paragraphs && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
                {destinationInfo.title}
              </h2>
              <div className='space-y-4 font-serif text-lg text-brand-neutral/90'>
                {destinationInfo.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.section>
          )}

          {diveSites?.sites && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                {diveSites.title}
              </h2>
              <div className='space-y-6'>
                {diveSites.sites.map((site) => (
                  <div key={site.name}>
                    <h3 className='text-2xl font-sans font-semibold text-brand-cta-green'>
                      {site.name}
                    </h3>
                    <p className='mt-1 font-serif text-brand-neutral/90'>
                      {site.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {gallery?.images && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-6'>
                {gallery.title}
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {gallery.images.map((img, i) => (
                  <div
                    key={i}
                    className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      src={img}
                      alt={`${name} foto ${i + 1}`}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </main>

        <motion.aside
          variants={fadeInFromBottom}
          className='lg:col-span-1 space-y-8 lg:sticky top-24 h-fit'>
          {details?.items && (
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
          )}

          {uniqueFinds?.items && (
            <div className='bg-brand-primary-medium p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-sans font-bold text-brand-white mb-4'>
                {uniqueFinds.title}
              </h3>
              <ul className='space-y-3'>
                {uniqueFinds.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-start'>
                    <CheckIcon />
                    <span className='ml-2 font-serif text-brand-neutral/90'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default DestinationTemplate;
