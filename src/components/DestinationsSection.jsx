import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinationIds } from '../data/destinations';
import { tripIds } from '../data/trips'; // Se importa el índice de viajes
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import { formatDateRange } from '../utils/formatters';

// La tarjeta individual ya no necesita cargar datos, solo recibirlos.
const DestinationCard = ({ destination, upcomingTrips }) => {
  return (
    <motion.div
      variants={fadeInFromBottom}
      className='bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm'>
      <img
        src={destination.imageUrl}
        alt={`Imagen de ${destination.name}`}
        className='w-full h-56 object-cover'
      />
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-2xl font-bold font-sans text-brand-white'>
          {destination.name}
        </h3>
        <p className='mt-2 font-serif text-brand-neutral flex-grow'>
          {destination.description}
        </p>

        <div className='mt-4 pt-4 border-t border-brand-primary-light/20'>
          <h4 className='font-sans font-semibold text-brand-white mb-2'>
            Próximas Fechas:
          </h4>
          {upcomingTrips.length > 0 ? (
            <ul className='space-y-2'>
              {upcomingTrips.map((trip) => (
                <li key={trip.id}>
                  <Link
                    to={`/expediciones/${trip.id}`}
                    className='block bg-brand-primary-dark p-3 rounded-md hover:bg-brand-primary-light transition-colors'>
                    <span className='font-serif text-brand-neutral'>
                      {formatDateRange(
                        trip.details.startDate,
                        trip.details.endDate
                      )}
                    </span>
                    <span className='text-xs text-brand-cta-orange ml-2'>
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className='font-serif text-sm text-brand-neutral/70'>
              No hay fechas programadas. ¡Contáctanos!
            </p>
          )}
        </div>
      </div>
      <Link
        to={destination.link}
        className='block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors mt-auto'>
        Explorar Destino
      </Link>
    </motion.div>
  );
};

const DestinationsSection = ({ id, title }) => {
  const [destinationsWithTrips, setDestinationsWithTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);

      // Cargar todos los destinos y todos los viajes
      const destPromises = destinationIds.map((id) =>
        import(`../data/destinations/${id}.js`)
      );
      const tripPromises = tripIds.map((id) =>
        import(`../data/trips/${id}.js`)
      );

      const [destModules, tripModules] = await Promise.all([
        Promise.all(destPromises),
        Promise.all(tripPromises),
      ]);

      const allDestinations = destModules.map(
        (mod) => mod[Object.keys(mod)[0]]
      );
      const allTrips = tripModules.map((mod) => mod[Object.keys(mod)[0]]);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Unir los datos: para cada destino, encontrar sus viajes futuros.
      const combinedData = allDestinations.map((destination) => {
        const associatedTrips = allTrips
          .filter(
            (trip) =>
              trip.destinationId === destination.id &&
              new Date(trip.details.endDate) >= today
          )
          .sort(
            (a, b) =>
              new Date(a.details.startDate) - new Date(b.details.startDate)
          );

        return {
          ...destination,
          upcomingTrips: associatedTrips,
        };
      });

      setDestinationsWithTrips(combinedData);
      setLoading(false);
    };
    loadAllData();
  }, []);

  if (loading) {
    return (
      <div className='text-center py-10 text-white'>Cargando destinos...</div>
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
          {destinationsWithTrips.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              upcomingTrips={destination.upcomingTrips}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
