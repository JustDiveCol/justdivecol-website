import React from "react";
import { motion } from "framer-motion";
// Se importan los datos específicos para esta sección.
import { testimonialsData as data } from "../data/siteData";

// --- Componentes de UI Internos ---

/**
 * Icono decorativo de comillas para el inicio de cada testimonio.
 */
const QuoteIcon = () => (
  <svg
    className="h-10 w-10 text-brand-cta-green/50"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
  </svg>
);

/**
 * Componente que renderiza una calificación de 1 a 5 estrellas.
 * @param {number} rating - El número de estrellas a rellenar.
 */
const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {/* Se crea un array de 5 elementos para dibujar 5 estrellas. */}
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        // El color de la estrella depende de si su índice es menor que la calificación.
        className={`h-5 w-5 ${
          i < rating ? "text-brand-cta-yellow" : "text-gray-500"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.35 9.393c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

/**
 * Componente principal que renderiza la sección de "Testimonios".
 * Muestra las opiniones de clientes para generar confianza y prueba social.
 */
const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-brand-primary-dark to-[#061a3a] py-20 px-4">
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

        {/* Cuadrícula para las tarjetas de testimonio. */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
            // Cada tarjeta tiene su propia animación de entrada escalonada.
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-brand-primary-medium/50 to-brand-primary-dark p-8 rounded-lg shadow-2xl flex flex-col border border-brand-primary-light/10"
            >
              <div className="flex-shrink-0">
                <QuoteIcon />
              </div>

              {/* Cita del testimonio. */}
              <p className="mt-6 text-left font-serif text-brand-neutral/90 flex-grow text-lg">
                {testimonial.quote}
              </p>

              {/* Información del autor del testimonio. */}
              <div className="mt-6 border-t border-brand-primary-light/20 pt-6 flex items-center space-x-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={`Avatar de ${testimonial.name}`}
                  className="h-14 w-14 rounded-full object-cover border-2 border-brand-cta-green"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/E0E0E0/0A264F?text=?";
                  }}
                />
                <div className="text-left">
                  <StarRating rating={testimonial.rating} />
                  <h4 className="mt-1 font-sans font-bold text-brand-white">
                    {testimonial.name}
                  </h4>
                  <p className="font-serif text-sm text-brand-neutral/80">
                    {testimonial.origin}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
