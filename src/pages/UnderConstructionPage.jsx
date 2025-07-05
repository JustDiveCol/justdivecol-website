import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos específicos para esta página.
import { underConstructionData as data } from "../data/siteData";

// --- Componente SVG Interno ---

/**
 * Icono SVG personalizado para la página "En Construcción".
 * Representa un manómetro o equipo de buceo.
 */
const ConstructionIcon = () => (
  <svg
    className="h-24 w-24 text-brand-cta-yellow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16.28 7.22a7 7 0 0 0-8.56 0" />
    <path d="M16.28 7.22a7 7 0 0 1 0 8.56" />
    <path d="M7.72 15.78a7 7 0 0 0 8.56 0" />
    <path d="M7.72 15.78a7 7 0 0 1 0-8.56" />
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
    <path d="M12 4.5l2 2" />
    <path d="M4.5 12l2 2" />
    <path d="M12 19.5l-2 2" />
    <path d="M19.5 12l-2 2" />
  </svg>
);

/**
 * Componente de página para mostrar cuando una sección está en desarrollo.
 */
const UnderConstructionPage = () => {
  return (
    // Contenedor principal que centra el contenido y ocupa la altura de la pantalla.
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 isolate overflow-hidden">
      {/* Contenedor para la imagen de fondo y la capa de superposición. */}
      <div className="absolute inset-0 -z-10">
        <img
          src={data.imageUrl} // La imagen ahora viene de los datos.
          alt="Fondo para página en construcción"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary-dark/85"></div>
      </div>

      {/* Contenedor del contenido principal con animación de entrada. */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <ConstructionIcon />
        <h1 className="mt-6 text-4xl md:text-6xl font-sans font-extrabold uppercase text-brand-white">
          {data.title}
        </h1>
        <p className="mt-4 max-w-lg mx-auto font-serif text-lg text-brand-neutral">
          {data.subtitle}
        </p>
        <div className="mt-10">
          {/* Botón que redirige al usuario de vuelta a la página de inicio. */}
          <Link
            to={data.ctaLink}
            className="inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50"
          >
            {data.ctaText}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstructionPage;
