import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos específicos para esta sección.
import { finalCtaData as data } from "../data/siteData";

/**
 * Componente reutilizable para la sección final de "Llamado a la Acción".
 * Muestra una imagen de fondo y contenido centrado para motivar al usuario
 * a realizar una última acción.
 */
const FinalCTA = () => {
  // NOTA: La URL de la imagen ahora se obtiene dinámicamente desde el objeto `data`.
  // Ya no está hardcodeada en el componente.
  return (
    <section
      className="relative bg-cover bg-center py-24 px-4 text-brand-white"
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      {/* Capa oscura superpuesta para mejorar la legibilidad del texto. */}
      <div className="absolute inset-0 bg-brand-primary-dark/80"></div>

      <div className="relative container mx-auto text-center">
        {/* Título principal con animación de entrada. */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-sans font-extrabold uppercase"
        >
          {data.title}
        </motion.h2>

        {/* Subtítulo animado con un pequeño retraso. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral"
        >
          {data.subtitle}
        </motion.p>

        {/* Botón de llamada a la acción animado. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to={data.ctaLink}
            className="inline-block bg-brand-cta-orange text-brand-white font-sans font-bold uppercase text-lg px-10 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50"
          >
            {data.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
