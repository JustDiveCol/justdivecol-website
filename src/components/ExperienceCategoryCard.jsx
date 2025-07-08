import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInFromBottom } from '../utils/animations';

/**
 * Tarjeta reutilizable que representa una categoría de experiencia.
 * Puede ser un enlace a otra página o un ancla con scroll suave.
 * @param {object} experience - Objeto con los datos de la tarjeta (link, imageUrl, category, title).
 */
const ExperienceCategoryCard = ({ experience }) => {
  // Determina si el enlace es un ancla (empieza con #) o una ruta de página.
  const isAnchorLink = experience.link.startsWith('#');

  // Función para hacer scroll suave si es un enlace de ancla.
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = experience.link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Contenido visual de la tarjeta, para no repetirlo.
  const cardContent = (
    <>
      <div
        className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
      <div className='relative h-full flex flex-col justify-end p-6 text-white'>
        <p className='font-sans text-sm uppercase tracking-widest text-brand-cta-orange font-semibold'>
          {experience.category}
        </p>
        <h3 className='mt-2 text-2xl md:text-3xl font-sans font-bold'>
          {experience.title}
        </h3>
      </div>
    </>
  );

  return (
    <motion.div
      variants={fadeInFromBottom}
      className='relative group h-96 rounded-lg overflow-hidden shadow-2xl w-full max-w-sm'>
      {isAnchorLink ? (
        // Si es un ancla, renderiza un botón con el evento onClick.
        <button
          onClick={handleScroll}
          className='block h-full w-full text-left'>
          {cardContent}
        </button>
      ) : (
        // Si es una ruta normal, renderiza un Link de React Router.
        <Link
          to={experience.link}
          className='block h-full w-full'>
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default ExperienceCategoryCard;
