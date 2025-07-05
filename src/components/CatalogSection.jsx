import React from "react";
import { motion } from "framer-motion";

// --- Componentes de UI Internos ---

/**
 * Ícono en forma de check para la lista de elementos incluidos.
 * Es un componente visual sin lógica propia.
 */
const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-brand-cta-green"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

/**
 * Tarjeta individual que muestra la información de un ítem del catálogo (curso o experiencia).
 * @param {object} item - El objeto de datos para el ítem a mostrar.
 */
const CatalogCard = ({ item }) => (
  <motion.div
    // Animación de entrada para la tarjeta
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col"
  >
    {/* Imagen principal de la tarjeta */}
    <img
      src={item.imageUrl}
      alt={`Imagen de ${item.title}`}
      className="w-full h-56 object-cover"
      // Fallback por si la imagen no carga correctamente
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/800x600?text=Error";
      }}
    />
    {/* Contenedor para el texto de la tarjeta */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold font-sans text-brand-white">
        {item.title}
      </h3>
      <p className="mt-2 font-serif text-brand-neutral flex-grow">
        {item.description}
      </p>

      {/* Sección "Qué Incluye" */}
      <div className="mt-4 pt-4 border-t border-brand-primary-light/20">
        <ul className="space-y-2">
          {item.includes.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckIcon />
              <span className="font-serif text-brand-neutral/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Precio y Duración */}
      <div className="mt-6 flex justify-between items-center">
        <span className="font-sans font-bold text-xl text-brand-cta-green">
          {item.price}
        </span>
        <span className="font-serif text-sm text-brand-neutral bg-brand-primary-light px-3 py-1 rounded-full">
          {item.duration}
        </span>
      </div>
    </div>
  </motion.div>
);

/**
 * Componente principal que renderiza una sección de catálogo completa.
 * @param {string} id - ID para el ancla de navegación (ej. "cursos").
 * @param {string} title - El título principal de la sección.
 * @param {Array} items - Un array de objetos, cada uno representando una tarjeta.
 */
const CatalogSection = ({ id, title, items }) => (
  <section
    id={id}
    className="py-20 px-4 border-t-2 border-brand-primary-light/20 scroll-mt-20"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-white text-center mb-12 uppercase">
        {title}
      </h2>
      {/* Contenedor de la cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Itera sobre los ítems y renderiza una tarjeta para cada uno */}
        {items.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default CatalogSection;
