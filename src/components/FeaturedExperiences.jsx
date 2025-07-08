import React from 'react';
import { motion } from 'framer-motion';

import { featuredExperiencesData as data } from '../data/siteData';

import ExperienceCategoryCard from './ExperienceCategoryCard';

/**
 * Componente principal que renderiza la sección de "Experiencias Destacadas".
 * Se utiliza comúnmente en la página de inicio para dar un vistazo rápido de los servicios.
 */
const FeaturedExperiences = () => (
  <section className='bg-brand-primary-dark py-20 px-4'>
    <div className='container mx-auto text-center'>
      {/* Título de la sección con animación. */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
        {data.title}
      </motion.h2>
      {/* Subtítulo de la sección con animación. */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral'>
        {data.subtitle}
      </motion.p>

      {/* Contenedor de la cuadrícula para las tarjetas. */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Itera sobre las categorías definidas en los datos y renderiza una tarjeta para cada una. */}
        {data.categories.map((exp) => (
          <ExperienceCategoryCard
            key={exp.id}
            experience={exp}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedExperiences;
