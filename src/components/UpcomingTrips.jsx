import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importa la lista de IDs de viajes para saber qué archivos cargar.
import { tripIds } from "../data/trips";

// --- Componentes de UI Internos ---

/**
 * Icono de calendario para decorar la lista de viajes.
 */
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-3 text-brand-neutral/80"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

/**
 * Función de ayuda para formatear un rango de fechas en un formato amigable.
 * @param {string} start - La fecha de inicio en formato 'YYYY-MM-DD'.
 * @param {string} end - La fecha de fin en formato 'YYYY-MM-DD'.
 * @returns {string} - La fecha formateada, ej: "5 - 10 de agosto, 2025".
 */
const formatDateRange = (start, end) => {
  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");

  const startDay = startDate.toLocaleDateString("es-ES", { day: "numeric" });
  const endDay = endDate.toLocaleDateString("es-ES", { day: "numeric" });
  const month = startDate.toLocaleDateString("es-ES", { month: "long" });
  const year = startDate.toLocaleDateString("es-ES", { year: "numeric" });

  return `${startDay} - ${endDay} de ${month}, ${year}`;
};

/**
 * Componente principal que muestra una lista de los próximos viajes.
 * Carga los datos de todos los viajes, los filtra para mostrar solo los futuros,
 * los ordena por fecha y muestra una cantidad limitada.
 * @param {string} title - El título de la sección.
 * @param {string} subtitle - El subtítulo de la sección.
 * @param {number} [limit=4] - El número máximo de viajes a mostrar.
 */
const UpcomingTrips = ({ title, subtitle, limit = 4 }) => {
  // Estado para almacenar los datos de los viajes cargados.
  const [trips, setTrips] = useState([]);
  // Estado para manejar la visualización de carga.
  const [loading, setLoading] = useState(true);

  // Efecto para cargar los datos de los viajes cuando el componente se monta.
  useEffect(() => {
    const loadTrips = async () => {
      setLoading(true);

      // Se crean promesas para importar dinámicamente cada archivo de viaje.
      const promises = tripIds.map((id) => import(`../data/trips/${id}.js`));
      // `Promise.allSettled` espera a que todas las promesas se resuelvan (con éxito o error).
      const results = await Promise.allSettled(promises);

      const today = new Date();
      today.setHours(0, 0, 0, 0); // Se ajusta la hora para comparar solo fechas.

      const loadedTrips = results
        .filter((res) => res.status === "fulfilled") // Se filtran solo los archivos que se cargaron correctamente.
        .map((res) => res.value[Object.keys(res.value)[0]]) // Se extrae el objeto de datos de cada módulo.
        .filter((trip) => new Date(trip.details.endDate) >= today) // Se filtran los viajes que ya pasaron.
        .sort(
          (a, b) =>
            new Date(a.details.startDate) - new Date(b.details.startDate)
        ); // Se ordenan los viajes por fecha de inicio.

      setTrips(loadedTrips.slice(0, limit)); // Se aplica el límite de resultados.
      setLoading(false);
    };

    loadTrips();
  }, [limit]); // El efecto se vuelve a ejecutar si el prop `limit` cambia.

  if (loading)
    return (
      <div className="text-center py-20 text-white">
        Cargando próximas salidas...
      </div>
    );

  // Si no hay viajes futuros, no se renderiza nada.
  if (trips.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-brand-primary-medium">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-white uppercase">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral">
          {subtitle}
        </p>

        {/* Lista de viajes */}
        <div className="mt-12 max-w-4xl mx-auto">
          <ul className="space-y-4">
            {trips.map((trip, index) => (
              <motion.li
                key={trip.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-primary-dark/50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg"
              >
                {/* Nombre del viaje y fechas */}
                <div className="flex items-center mb-4 md:mb-0">
                  <CalendarIcon />
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-left text-brand-white">
                      {trip.name}
                    </h3>
                    <p className="text-md font-serif text-left text-brand-neutral/80">
                      {formatDateRange(
                        trip.details.startDate,
                        trip.details.endDate
                      )}
                    </p>
                  </div>
                </div>

                {/* Botón para ver más detalles */}
                <div className="flex items-center space-x-4">
                  <Link
                    to={`/expediciones/${trip.id}`}
                    className="bg-brand-cta-orange text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
