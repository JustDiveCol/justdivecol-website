import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tripIds } from '../data/trips';
import { formatDateRange } from '../utils/formatters';

// --- Iconos ---
const CalendarIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 mr-3 text-brand-neutral/80'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    />
  </svg>
);

/**
 * Componente principal de próximas salidas, ahora como un carrusel.
 * Muestra 3 viajes a la vez y permite navegar si hay más.
 */
const UpcomingTrips = ({ title, subtitle }) => {
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(allTrips.length / ITEMS_PER_PAGE);

  // Carga dinámica de datos de viajes
  useEffect(() => {
    const loadTrips = async () => {
      setLoading(true);
      const promises = tripIds.map((id) => import(`../data/trips/${id}.js`));
      const results = await Promise.allSettled(promises);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const loadedTrips = results
        .filter((res) => res.status === 'fulfilled')
        .map((res) => res.value[Object.keys(res.value)[0]])
        .filter((trip) => new Date(trip.details.endDate) >= today)
        .sort(
          (a, b) =>
            new Date(a.details.startDate) - new Date(b.details.startDate)
        );

      setAllTrips(loadedTrips);
      setLoading(false);
    };

    loadTrips();
  }, []);

  // Lógica de paginación del carrusel
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentTrips = allTrips.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className='text-center py-20 text-white'>
        Cargando próximas salidas...
      </div>
    );
  }
  if (allTrips.length === 0) return null;

  return (
    <section
      id='upcoming-trips-section'
      className='py-20 px-4 bg-brand-primary-medium scroll-mt-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-sans font-bold text-brand-white uppercase'>
          {title}
        </h2>
        <p className='mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
          {subtitle}
        </p>

        <div className='mt-12 max-w-4xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <motion.ul
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className='space-y-4'>
              {currentTrips.map((trip) => (
                <li
                  key={trip.id}
                  className='bg-brand-primary-dark/50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg'>
                  <div className='flex items-center mb-4 md:mb-0'>
                    <CalendarIcon />
                    <div>
                      <h3 className='text-xl font-sans font-semibold text-left text-brand-white'>
                        {trip.name}
                      </h3>
                      <p className='text-md font-serif text-left text-brand-neutral/80'>
                        {formatDateRange(
                          trip.details.startDate,
                          trip.details.endDate
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <Link
                      to={`/expediciones/${trip.id}`}
                      className='bg-brand-cta-orange text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300'>
                      Ver Detalles
                    </Link>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Controles de navegación del carrusel */}
        {totalPages > 1 && (
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <button
              onClick={handlePrev}
              className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Anterior'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <div className='flex space-x-2'>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPage === i
                      ? 'bg-brand-cta-orange'
                      : 'bg-brand-primary-light hover:bg-brand-neutral/50'
                  }`}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className='p-2 rounded-full bg-brand-primary-dark hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Siguiente'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingTrips;
