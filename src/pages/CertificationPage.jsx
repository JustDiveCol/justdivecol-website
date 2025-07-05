import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CertificationTemplate from "../templates/CertificationTemplate";
import NotFoundPage from "./NotFoundPage";
// Se importa la lista de IDs de todos los viajes para poder buscarlos.
import { tripIds } from "../data/trips";
// Se importan las variantes de animación reutilizables.
import { staggerContainer } from "../utils/animations";

import SEO from "../components/SEO";

/**
 * Página dinámica que muestra los detalles de un curso de certificación específico.
 * Es un componente "inteligente" cuya principal responsabilidad es:
 * 1. Leer el ID del curso desde la URL.
 * 2. Cargar dinámicamente los datos de ese curso.
 * 3. Buscar y cargar los datos de los viajes que ofrecen ese curso.
 * 4. Pasar todos los datos a la plantilla de diseño (`CertificationTemplate`) para su renderizado.
 */
const CertificationPage = () => {
  // El hook `useParams` extrae los parámetros de la URL.
  // En este caso, de la ruta "/certificaciones/:courseId", extrae "courseId".
  const { courseId } = useParams();

  // --- Estados del Componente ---
  const [courseData, setCourseData] = useState(null); // Almacena los datos del curso cargado.
  const [availableTrips, setAvailableTrips] = useState([]); // Almacena los viajes que ofrecen este curso.
  const [loading, setLoading] = useState(true); // Controla el estado de carga.
  const [error, setError] = useState(false); // Controla si ocurrió un error al cargar los datos.

  // El hook `useEffect` ejecuta la lógica de carga de datos cuando el componente se monta
  // o cuando el `courseId` en la URL cambia.
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(false);

        // 1. Cargar los datos del curso principal usando importación dinámica.
        const courseDataModule = await import(`../data/courses/${courseId}.js`);
        setCourseData(courseDataModule[Object.keys(courseDataModule)[0]]);

        // 2. Cargar los datos de TODOS los viajes para buscar coincidencias.
        const tripsPromises = tripIds.map((id) =>
          import(`../data/trips/${id}.js`)
        );
        // `Promise.allSettled` es robusto: espera a que todas las promesas se resuelvan,
        // incluso si alguna falla, evitando que la página se rompa por completo.
        const tripsResults = await Promise.allSettled(tripsPromises);

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Para comparar solo fechas, sin la hora.

        // 3. Filtrar y ordenar los viajes que ofrecen este curso.
        const matchingTrips = tripsResults
          .filter((result) => result.status === "fulfilled") // Solo procesar los que cargaron bien.
          .map((result) => result.value[Object.keys(result.value)[0]]) // Extraer el objeto de datos.
          .filter(
            (trip) =>
              // La condición de filtrado:
              // a) El viaje debe ofrecer el curso actual (comprobando el ID).
              trip.offeredCourses?.ids.includes(courseId) &&
              // b) El viaje no debe haber terminado.
              new Date(trip.details.endDate) >= today
          )
          .sort(
            (a, b) =>
              // Ordenar los viajes por fecha de inicio, del más próximo al más lejano.
              new Date(a.details.startDate) - new Date(b.details.startDate)
          );

        setAvailableTrips(matchingTrips);
      } catch (err) {
        // Si la carga de datos del curso principal falla (ej. URL incorrecta),
        // se activa el estado de error.
        console.error("Fallo al cargar los datos:", err);
        setError(true);
      } finally {
        // Se asegura de que el estado de carga se desactive al final.
        setLoading(false);
      }
    };

    loadData();
  }, [courseId]); // El efecto se vuelve a ejecutar si el ID del curso en la URL cambia.

  // --- Renderizado Condicional ---

  // Muestra un mensaje de carga mientras los datos se están obteniendo.
  if (loading) {
    return (
      <div className="min-h-screen bg-brand-primary-dark flex items-center justify-center text-white text-2xl">
        Cargando...
      </div>
    );
  }

  // Si hubo un error (ej. el curso no existe), muestra la página 404.
  if (error) {
    return <NotFoundPage />;
  }

  // Si los datos se cargaron correctamente, renderiza la plantilla de diseño
  // pasándole toda la información necesaria.
  return courseData ? (
    <>
      <SEO
        title={courseData.seo?.title || courseData.name}
        description={
          courseData.seo?.description || courseData.description.paragraphs[0]
        }
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <CertificationTemplate
          courseData={courseData}
          availableTrips={availableTrips}
        />
      </motion.div>
    </>
  ) : null;
};

export default CertificationPage;
