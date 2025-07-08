import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import { formatDateRange } from '../utils/formatters';

import { tripIds } from '../data/trips';

const CatalogSection = ({ id, title, itemIds, type }) => {
  const [displayItems, setDisplayItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!itemIds?.length) {
        setLoading(false);
        return;
      }
      setLoading(true);

      try {
        // Cargar los datos base de los ítems (cursos en este caso)
        const itemPromises = itemIds.map((itemId) =>
          import(`../data/courses/${itemId}.js`)
        );
        const itemModules = await Promise.all(itemPromises);
        const items = itemModules.map((mod) => mod[Object.keys(mod)[0]]);

        // Cargar todos los viajes para determinar la disponibilidad de los cursos
        const tripPromises = tripIds.map((tripId) =>
          import(`../data/trips/${tripId}.js`)
        );
        const tripModules = await Promise.all(tripPromises);
        const trips = tripModules.map((mod) => mod[Object.keys(mod)[0]]);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingTrips = trips.filter(
          (trip) => new Date(trip.details.endDate) >= today
        );

        // Añadir el estado calculado a cada curso
        const itemsWithStatus = items.map((course) => {
          const isOffered = upcomingTrips.some((trip) =>
            trip.offeredCourses?.ids.includes(course.id)
          );
          return {
            ...course,
            status: isOffered ? 'Disponible' : 'Próximamente',
          };
        });

        setDisplayItems(itemsWithStatus);
      } catch (error) {
        console.error(`Error loading items for catalog:`, error);
        setDisplayItems([]);
      } finally {
        setLoading(false);
      }
    };

    // Esta lógica solo aplica para el catálogo de cursos
    if (type === 'course') {
      loadData();
    }
  }, [itemIds, type]);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Disponible':
        return 'bg-brand-cta-green text-brand-primary-dark';
      case 'Próximamente':
      default:
        return 'bg-brand-cta-yellow text-brand-primary-dark';
    }
  };

  if (loading) {
    return (
      <div className='text-center py-10 text-white'>Cargando cursos...</div>
    );
  }

  return (
    <section
      id={id}
      className='py-20 px-4 border-t-2 border-brand-primary-light/20 scroll-mt-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-sans font-bold text-brand-white text-center mb-12 uppercase'>
          {title}
        </h2>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.1 }}
          className='flex flex-wrap justify-center gap-8'>
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInFromBottom}
              className='bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm'>
              <img
                src={item.header?.imageUrl}
                alt={`Imagen de ${item.name}`}
                className='w-full h-56 object-cover bg-brand-primary-light'
              />
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold font-sans text-brand-white'>
                  {item.name || 'Experiencia sin nombre'}
                </h3>
                <p className='mt-2 font-serif text-brand-neutral flex-grow'>
                  {item.description?.paragraphs?.[0]?.substring(0, 100) ??
                    'Próximamente más detalles...'}
                  ...
                </p>
                <div className='mt-6 flex justify-between items-center'>
                  <span
                    className={`font-sans font-bold text-sm px-3 py-1 rounded-full ${getStatusStyles(
                      item.status
                    )}`}>
                    {item.status}
                  </span>
                  <span className='font-serif text-sm text-brand-neutral bg-brand-primary-light px-3 py-1 rounded-full text-center'>
                    {
                      item.details?.items?.find((d) => d.label === 'Duración')
                        ?.value
                    }
                  </span>
                </div>
              </div>
              <Link
                to={`/certificaciones/${item.id}`}
                className='block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors'>
                Ver Detalles
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogSection;
