import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Componente reutilizable para mostrar una sección de "Llamado a la Acción" (CTA).
 * Muestra una imagen de fondo, un título, un subtítulo y un botón.
 * Todo el contenido es dinámico y se recibe a través del prop `data`.
 * @param {object} data - Objeto con los datos para el CTA.
 * @param {string} data.imageUrl - URL de la imagen de fondo.
 * @param {string} data.title - El título principal.
 * @param {string} data.subtitle - El texto descriptivo.
 * @param {string} data.ctaText - El texto del botón.
 * @param {string} data.ctaLink - La ruta a la que enlazará el botón.
 */
const CustomTripCTA = ({ data }) => {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-4 text-brand-white"
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      {/* Capa oscura superpuesta sobre la imagen de fondo.
          Mejora el contraste y la legibilidad del texto. */}
      <div className="absolute inset-0 bg-brand-primary-dark/70"></div>

      {/* Contenedor para el contenido, posicionado sobre la capa oscura. */}
      <div className="relative container mx-auto text-center z-10">
        {/* Título con animación de entrada cuando se hace visible. */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // La animación se activa una sola vez
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-sans font-bold uppercase"
        >
          {data.title}
        </motion.h2>

        {/* Subtítulo con un leve retraso en la animación para un efecto escalonado. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral"
        >
          {data.subtitle}
        </motion.p>

        {/* Botón animado con redirección al enlace proporcionado por los datos. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to={data.ctaLink}
            className="inline-block border-2 border-brand-cta-orange text-brand-cta-orange font-sans font-bold uppercase text-base px-8 py-3 rounded-md transition-colors duration-300 hover:bg-brand-cta-orange hover:text-brand-white focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50"
          >
            {data.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomTripCTA;
