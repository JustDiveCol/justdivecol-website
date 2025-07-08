import React from 'react';
import { motion } from 'framer-motion';
// Se importan todos los componentes de sección que conforman la página de inicio.
import Hero from '../components/Hero';
import FeaturedExperiences from '../components/FeaturedExperiences';
import SafetySection from '../components/SafetySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
// Se importan las animaciones reutilizables.
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import { testimonialsData } from '../data/siteData';

import SEO from '../components/SEO';

/**
 * Componente principal de la Página de Inicio.
 * Su única responsabilidad es componer y orquestar la animación
 * de todas las secciones que la conforman.
 */
const Home = () => {
  return (
    // El contenedor principal de la página utiliza `staggerContainer`
    // para animar a sus hijos (`motion.div`) en una secuencia escalonada.
    <>
      <SEO
        title='Inicio'
        description='Explora las maravillas submarinas de Colombia con JustDiveCol. Ofrecemos certificaciones PADI, expediciones y viajes de buceo personalizados.'
      />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        exit='hidden'>
        {/* Cada sección se envuelve en su propio `motion.div` para que
          pueda ser tratada como un "hijo" por el contenedor principal.
          Todas usan la misma animación `fadeInFromBottom` para una entrada consistente. */}

        <motion.div variants={fadeInFromBottom}>
          <Hero />
        </motion.div>
        <motion.div variants={fadeInFromBottom}>
          <FeaturedExperiences />
        </motion.div>
        <motion.div variants={fadeInFromBottom}>
          <SafetySection />
        </motion.div>
        <motion.div variants={fadeInFromBottom}>
          {testimonialsData.testimonials &&
            testimonialsData.testimonials.length > 0 && (
              <motion.div variants={fadeInFromBottom}>
                <TestimonialsSection />
              </motion.div>
            )}
        </motion.div>
        <motion.div variants={fadeInFromBottom}>
          <FinalCTA />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
