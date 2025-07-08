import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DestinationTemplate from '../templates/DestinationTemplate';
import NotFoundPage from './NotFoundPage';
import SEO from '../components/SEO';
// Se importa el índice de viajes para poder buscarlos todos.
import { tripIds } from '../data/trips';
import { staggerContainer } from '../utils/animations';

const DestinationPage = () => {
  const { destinationId } = useParams();
  const [destinationData, setDestinationData] = useState(null);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(false);

        // 1. Cargar los datos del destino principal.
        const destinationModule = await import(
          `../data/destinations/${destinationId}.js`
        );
        const mainDestinationData =
          destinationModule[Object.keys(destinationModule)[0]];
        setDestinationData(mainDestinationData);

        // 2. Cargar TODOS los viajes para encontrar los que coinciden.
        const tripPromises = tripIds.map((id) =>
          import(`../data/trips/${id}.js`)
        );
        const tripModules = await Promise.all(tripPromises);
        const allTrips = tripModules.map((mod) => mod[Object.keys(mod)[0]]);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 3. Filtrar los viajes que pertenecen a ESTE destino y son futuros.
        const matchingTrips = allTrips
          .filter(
            (trip) =>
              trip.destinationId === destinationId &&
              new Date(trip.details.endDate) >= today
          )
          .sort(
            (a, b) =>
              new Date(a.details.startDate) - new Date(b.details.startDate)
          );

        setUpcomingTrips(matchingTrips);
      } catch (err) {
        console.error('Fallo al cargar los datos del destino:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [destinationId]);

  if (loading) {
    return (
      <div className='min-h-screen bg-brand-primary-dark flex items-center justify-center text-white text-2xl'>
        Cargando destino...
      </div>
    );
  }

  if (error) {
    return <NotFoundPage />;
  }

  return destinationData ? (
    <>
      <SEO
        title={destinationData.name}
        description={destinationData.description}
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <DestinationTemplate
          destinationData={destinationData}
          upcomingTrips={upcomingTrips}
        />
      </motion.div>
    </>
  ) : null;
};

export default DestinationPage;
