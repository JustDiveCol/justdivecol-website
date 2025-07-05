import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Componente SVG Interno ---

/**
 * Icono SVG personalizado que representa un buzo perdido o una brújula,
 * temático para la página de error 404.
 */
const LostDiverIcon = () => (
  <svg
    className="h-24 w-24 text-brand-cta-yellow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 18.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    <path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M12 4v-1" />
    <path d="M12 21v-1" />
    <path d="M4 12h-1" />
    <path d="M21 12h-1" />
    <path d="M15.5 15.5l.7.7" />
    <path d="M7.8 8.5l-.7-.7" />
    <path d="M15.5 8.5l.7-.7" />
    <path d="M7.8 15.5l-.7.7" />
    <path d="M9 16.5a1 1 0 0 1-1-1.5 1 1 0 1 1 1.5 1.5" />
  </svg>
);

/**
 * Componente de página para el error 404 (Página No Encontrada).
 * Se muestra cuando un usuario navega a una URL que no existe.
 */
const NotFoundPage = () => {
  return (
    // Contenedor principal que centra el contenido y ocupa la altura de la pantalla.
    // `isolate` crea un nuevo contexto de apilamiento para que el `z-index` funcione correctamente.
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 isolate overflow-hidden">
      {/* Contenedor para la imagen de fondo y la capa de superposición. */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://placehold.co/1920x1080/0A264F/FFFFFF?text=Buscando+a+Nemo...+y+tampoco+está+aquí"
          alt="Fondo divertido para página 404"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary-dark/80" />
      </div>

      {/* Contenedor del contenido principal con animación de entrada. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <LostDiverIcon />
        <h1 className="mt-6 text-4xl md:text-6xl font-sans font-extrabold uppercase text-brand-white">
          404: RUTA PERDIDA
        </h1>
        <p className="mt-4 max-w-lg mx-auto font-serif text-lg text-brand-neutral">
          ¡Ups! Olvidaste ecualizar y terminaste aquí. Regresemos a la
          superficie antes de que duela.
        </p>
        <div className="mt-10">
          {/* Botón que redirige al usuario de vuelta a la página de inicio. */}
          <Link
            to="/"
            className="inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50"
          >
            Volver a la Superficie
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
