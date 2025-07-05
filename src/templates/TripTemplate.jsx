import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan las animaciones reutilizables para mantener la consistencia.
import { staggerContainer, fadeInFromBottom } from "../utils/animations";

// --- Componentes de UI Internos (Iconos) ---
const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-brand-cta-green"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
const CrossIcon = () => (
  <svg
    className="h-6 w-6 text-red-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Funciones de Ayuda (Helpers) ---

/**
 * Formatea un rango de fechas en un formato amigable para el usuario.
 * @param {string} start - La fecha de inicio en formato 'YYYY-MM-DD'.
 * @param {string} end - La fecha de fin en formato 'YYYY-MM-DD'.
 * @returns {string|null} - La fecha formateada o null si las fechas no son válidas.
 */
const formatDateRange = (start, end) => {
  if (!start || !end) return null;
  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");
  const yearOption = { year: "numeric" };
  const startDay = startDate.toLocaleDateString("es-ES", { day: "numeric" });
  const endDay = endDate.toLocaleDateString("es-ES", { day: "numeric" });
  const month = startDate.toLocaleDateString("es-ES", { month: "long" });
  const year = startDate.toLocaleDateString("es-ES", yearOption);
  if (startDate.getMonth() === endDate.getMonth()) {
    return `${startDay} - ${endDay} de ${month}, ${year}`;
  }
  return `${startDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  })} - ${endDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
};

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

  return (
    // El contenedor principal orquesta la animación en cascada de sus hijos.
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-brand-primary-dark text-brand-neutral"
    >
      {/* Cada sección principal es un hijo animado. */}
      <motion.div variants={fadeInFromBottom}>
        <section
          className="relative h-96 bg-cover bg-center text-brand-white flex items-center justify-center text-center"
          style={{ backgroundImage: `url(${header.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-brand-primary-dark/70"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold uppercase">
              {header.title}
            </h1>
            <p className="mt-2 max-w-2xl mx-auto font-serif text-lg">
              {header.subtitle}
            </p>
          </div>
        </section>
      </motion.div>

      <div className="container mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8">
        {/* Columna de contenido principal */}
        <main className="lg:col-span-2 space-y-16">
          {/* Sección de Cursos Disponibles */}
          {offeredCoursesData?.length > 0 && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className="text-3xl font-sans font-bold text-brand-white mb-6">
                {offeredCourses.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offeredCoursesData.map((course) => (
                  <Link
                    key={course.id}
                    to={`/certificaciones/${course.id}`}
                    className="block bg-brand-primary-medium p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-xl font-sans font-bold text-brand-white">
                      {course.name}
                    </h3>
                    <p className="mt-1 font-serif text-brand-neutral/80">
                      {course.header.subtitle}
                    </p>
                    <span className="mt-4 inline-block font-sans text-sm font-semibold text-brand-cta-orange">
                      Ver detalles &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Sección de Descripción */}
          <motion.section variants={fadeInFromBottom}>
            <h2 className="text-3xl font-sans font-bold text-brand-white mb-4">
              {description.title}
            </h2>
            <div className="space-y-4 font-serif text-lg text-brand-neutral/90">
              {description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.section>

          {/* Sección de Itinerario */}
          <motion.section variants={fadeInFromBottom}>
            <h2 className="text-3xl font-sans font-bold text-brand-white mb-6">
              {itinerary.title}
            </h2>
            <div className="border-l-2 border-brand-cta-green/50 pl-6 space-y-8">
              {itinerary.days.map((day) => (
                <div key={day.day}>
                  <h3 className="text-xl font-sans font-semibold text-brand-cta-green">
                    Día {day.day}: {day.title}
                  </h3>
                  <p className="mt-1 font-serif text-brand-neutral/90">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
            {itinerary.note && (
              <div className="mt-6 flex items-start p-4 bg-brand-primary-light/30 rounded-lg text-brand-neutral/80">
                <InfoIcon />
                <p className="font-serif text-sm">{itinerary.note}</p>
              </div>
            )}
          </motion.section>

          {/* Sección de Galería */}
          {gallery && (
            <motion.section variants={fadeInFromBottom}>
              <h2 className="text-3xl font-sans font-bold text-brand-white mb-6">
                {gallery.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {gallery.images.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={img}
                      alt={`${header.title} foto ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
          className="lg:col-span-1 space-y-8 lg:sticky top-24 h-fit"
        >
          {/* Detalles del Viaje */}
          <div className="bg-brand-primary-medium p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-sans font-bold text-brand-white mb-4">
              {details.title}
            </h3>
            <ul className="space-y-3 font-serif">
              <li
                key="fecha"
                className="flex items-baseline justify-between gap-4"
              >
                <span className="text-brand-neutral/80">Fechas:</span>
                <span className="font-bold text-brand-white text-right">
                  {formatDateRange(details.startDate, details.endDate)}
                </span>
              </li>
              {details.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-brand-neutral/80">{item.label}:</span>
                  <span className="font-bold text-brand-white text-right">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qué Incluye */}
          <div className="bg-brand-primary-medium p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-sans font-bold text-brand-white mb-4">
              {whatIsIncluded.title}
            </h3>
            <ul className="space-y-3">
              {combinedIncludedItems.map((item) => (
                <li key={item} className="flex items-start">
                  <div className="flex-shrink-0 w-6 mt-1">
                    <CheckIcon />
                  </div>
                  <span className="ml-2 font-serif text-brand-neutral/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qué NO Incluye */}
          {whatIsNotIncluded && (
            <div className="bg-brand-primary-medium p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-sans font-bold text-brand-white mb-4">
                {whatIsNotIncluded.title}
              </h3>
              <ul className="space-y-3">
                {whatIsNotIncluded.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 w-6 mt-1">
                      <CrossIcon />
                    </div>
                    <span className="ml-2 font-serif text-brand-neutral/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Llamado a la Acción */}
          <div className="bg-brand-primary-light p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-sans font-bold text-brand-white">
              {cta.title}
            </h3>
            <Link
              to={cta.link}
              className="mt-4 inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-colors"
            >
              {cta.buttonText}
            </Link>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default TripTemplate;
