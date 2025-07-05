import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos específicos para esta sección.
import { safetyData as data } from "../data/siteData";

// --- Componentes SVG para los íconos de seguridad ---
// Definir los íconos como componentes internos mantiene el archivo autocontenido.
const ShieldCheckIcon = () => (
  <svg
    className="h-12 w-12"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 3 9-3a12.02 12.02 0 00-3.382-8.94"
    />
  </svg>
);

const CogIcon = () => (
  <svg
    className="h-12 w-12"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClipboardListIcon = () => (
  <svg
    className="h-12 w-12"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

// Este objeto mapea los IDs de los datos (ej. "guias") con los componentes de íconos.
// Esto permite cambiar los íconos fácilmente sin alterar la lógica del componente.
const icons = {
  guias: <ShieldCheckIcon />,
  equipos: <CogIcon />,
  protocolos: <ClipboardListIcon />,
};

/**
 * Componente que renderiza la sección de "Seguridad" en la página de inicio.
 * Muestra los pilares de seguridad de la empresa.
 */
const SafetySection = () => {
  return (
    <section className="bg-brand-primary-medium py-20 px-4">
      <div className="container mx-auto text-center text-brand-white">
        {/* Título principal de la sección. */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-sans font-bold uppercase"
        >
          {data.title}
        </motion.h2>

        {/* Subtítulo de la sección. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral"
        >
          {data.subtitle}
        </motion.p>

        {/* Cuadrícula para los puntos de seguridad. */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.points.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* El ícono se selecciona dinámicamente usando el ID del punto. */}
              <div className="text-brand-cta-green">{icons[point.id]}</div>
              <h3 className="mt-4 text-2xl font-sans font-semibold">
                {point.title}
              </h3>
              <p className="mt-2 font-serif text-brand-neutral">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón de llamada a la acción. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <Link
            to={data.ctaLink}
            className="inline-block border-2 border-brand-cta-orange text-brand-cta-orange font-sans font-bold uppercase text-base px-8 py-3 rounded-md transition-colors duration-300 hover:bg-brand-cta-orange hover:text-brand-white"
          >
            {data.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetySection;
