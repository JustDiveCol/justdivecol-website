import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos específicos para esta sección desde el archivo central.
import { featuredExperiencesData as data } from "../data/siteData";

/**
 * Tarjeta individual que muestra una de las categorías de experiencias destacadas.
 * @param {object} experience - El objeto de datos para la experiencia a mostrar.
 * @param {number} index - El índice de la tarjeta, usado para escalonar la animación.
 */
const ExperienceCard = ({ experience, index }) => (
  // Cada tarjeta tiene su propia animación de entrada.
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }} // La animación se activa al ver el 30% de la tarjeta.
    transition={{ duration: 0.6, delay: index * 0.2 }} // El retraso crea un efecto de cascada.
    className="relative group h-96 rounded-lg overflow-hidden shadow-2xl"
  >
    <Link to={experience.link} className="block h-full w-full">
      {/* Imagen de fondo con efecto de zoom al pasar el mouse. */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      />
      {/* Capa de gradiente oscuro para asegurar que el texto sea legible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Contenido textual posicionado en la parte inferior de la tarjeta. */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <p className="font-sans text-sm uppercase tracking-widest text-brand-cta-orange font-semibold">
          {experience.category}
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl font-sans font-bold leading-tight">
          {experience.title}
        </h3>
      </div>
    </Link>
  </motion.div>
);

/**
 * Componente principal que renderiza la sección de "Experiencias Destacadas".
 * Se utiliza comúnmente en la página de inicio para dar un vistazo rápido de los servicios.
 */
const FeaturedExperiences = () => (
  <section className="bg-brand-primary-dark py-20 px-4">
    <div className="container mx-auto text-center">
      {/* Título de la sección con animación. */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase"
      >
        {data.title}
      </motion.h2>
      {/* Subtítulo de la sección con animación. */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-2xl mx-auto font-serif text-lg text-brand-neutral"
      >
        {data.subtitle}
      </motion.p>

      {/* Contenedor de la cuadrícula para las tarjetas. */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Itera sobre las categorías definidas en los datos y renderiza una tarjeta para cada una. */}
        {data.categories.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedExperiences;
