import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import TripTemplate from "../templates/TripTemplate";
import NotFoundPage from "./NotFoundPage";
// Se importan las variantes de animación para mantener la consistencia.
import { staggerContainer } from "../utils/animations";

import SEO from "../components/SEO";

/**
 * Página dinámica que muestra los detalles de un viaje o expedición específica.
 * Es un componente "inteligente" cuya principal responsabilidad es:
 * 1. Leer el ID del viaje desde la URL.
 * 2. Cargar dinámicamente los datos de ese viaje.
 * 3. Cargar los datos de los cursos que se ofrecen en ese viaje.
 * 4. Pasar toda la información a la plantilla de diseño (`TripTemplate`).
 */
const TripPage = () => {
  // El hook `useParams` extrae el `tripId` de la URL (ej. "/expediciones/:tripId").
  const { tripId } = useParams();

  // --- Estados del Componente ---
  const [tripData, setTripData] = useState(null); // Almacena los datos del viaje principal.
  const [offeredCoursesData, setOfferedCoursesData] = useState([]); // Almacena los datos de los cursos asociados.
  const [loading, setLoading] = useState(true); // Controla el estado de carga.
  const [error, setError] = useState(false); // Controla si ocurrió un error.

  // Efecto para cargar todos los datos necesarios cuando el `tripId` cambia.
  useEffect(() => {
    const loadTripData = async () => {
      try {
        setLoading(true);
        setError(false);

        // 1. Cargar los datos del viaje principal.
        const tripDataModule = await import(`../data/trips/${tripId}.js`);
        const mainTripData = tripDataModule[Object.keys(tripDataModule)[0]];
        setTripData(mainTripData);

        // 2. Si el viaje ofrece cursos, cargar los datos de esos cursos.
        if (mainTripData.offeredCourses && mainTripData.offeredCourses.ids) {
          const coursesPromises = mainTripData.offeredCourses.ids.map((id) =>
            import(`../data/courses/${id}.js`)
          );
          const coursesModules = await Promise.all(coursesPromises);
          const coursesData = coursesModules.map(
            (module) => module[Object.keys(module)[0]]
          );
          setOfferedCoursesData(coursesData);
        }
      } catch (err) {
        // Si la carga de datos del viaje falla, se activa el estado de error.
        console.error("Fallo al cargar los datos del viaje:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadTripData();
  }, [tripId]); // El efecto se vuelve a ejecutar si el ID del viaje en la URL cambia.

  // --- Renderizado Condicional ---

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-primary-dark flex items-center justify-center text-white text-2xl">
        Cargando información del viaje...
      </div>
    );
  }

  if (error) {
    return <NotFoundPage />;
  }

  // Si los datos se cargaron correctamente, se renderiza la plantilla
  // envuelta en el contenedor de animación.
  return tripData ? (
    <>
      <SEO
        title={tripData.seo?.title || tripData.name}
        description={
          tripData.seo?.description || tripData.description.paragraphs[0]
        }
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <TripTemplate
          tripData={tripData}
          offeredCoursesData={offeredCoursesData}
        />
      </motion.div>
    </>
  ) : null;
};

export default TripPage;
