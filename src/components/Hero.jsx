import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos específicos para esta sección desde el archivo central.
import { heroData } from "../data/siteData";

/**
 * Componente principal de la sección Hero.
 * Es la primera sección que ven los usuarios y debe ser visualmente impactante.
 * Carga todo su contenido (textos, imagen, enlace) desde el objeto `heroData`.
 */
const Hero = () => {
  return (
    // La sección ocupa toda la pantalla (min-h-screen) y centra su contenido.
    // La imagen de fondo se aplica dinámicamente desde los datos.
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-brand-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroData.imageUrl})` }}
    >
      {/* Capa oscura superpuesta para mejorar el contraste y la legibilidad del texto. */}
      <div className="absolute inset-0 bg-brand-primary-dark/70"></div>

      {/* Contenedor para el contenido, posicionado sobre la capa oscura. */}
      <div className="relative z-10 p-4">
        {/* Título principal animado. */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold uppercase tracking-tight"
        >
          {heroData.title}
        </motion.h1>

        {/* Subtítulo animado con un pequeño retraso. */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-serif text-brand-neutral"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Botón de llamada a la acción (CTA) animado. */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to={heroData.ctaLink}
            className="inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-8 py-4 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-cta-yellow"
          >
            {heroData.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
