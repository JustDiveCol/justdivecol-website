import React from 'react';
import { motion } from 'framer-motion';
import { fadeInFromBottom } from '../utils/animations';

/**
 * Componente reutilizable para el encabezado de una página.
 * Muestra una imagen de fondo, un título y un subtítulo.
 * @param {string} title - El título principal del encabezado.
 * @param {string} subtitle - El subtítulo o texto descriptivo.
 * @param {string} imageUrl - La URL de la imagen de fondo.
 */
const PageHeader = ({ title, subtitle, imageUrl }) => {
  return (
    // La sección se anima como un bloque único.
    <motion.div variants={fadeInFromBottom}>
      <section
        className='relative h-80 bg-cover bg-center text-brand-white flex items-center justify-center text-center'
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='absolute inset-0 bg-brand-primary-dark/70' />
        <div className='relative z-10 p-4'>
          <h1 className='text-4xl md:text-6xl font-sans font-extrabold uppercase'>
            {title}
          </h1>
          <p className='mt-2 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
            {subtitle}
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default PageHeader;
