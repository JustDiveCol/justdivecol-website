import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos y las animaciones reutilizables.
import { seguridadPageData as data } from "../data/siteData";
import { staggerContainer, fadeInFromBottom } from "../utils/animations";

import SEO from "../components/SEO";

// -----------------------------
// Subcomponentes de Presentación (Sin Lógica de Animación Propia)
// -----------------------------

/**
 * Encabezado de la página con imagen de fondo y título.
 */
const PageHeader = ({ title, subtitle, imageUrl }) => (
  <section
    className="relative h-80 bg-cover bg-center text-brand-white flex items-center justify-center text-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-brand-primary-dark/70" />
    <div className="relative z-10 p-4">
      <h1 className="text-4xl md:text-6xl font-sans font-extrabold uppercase">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl mx-auto font-serif text-lg text-brand-neutral">
        {subtitle}
      </p>
    </div>
  </section>
);

/**
 * Sección que detalla los protocolos de seguridad.
 */
const ProtocolsSection = ({ protocolsData }) => (
  <section className="py-20 px-4 bg-brand-primary-dark">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase">
          {protocolsData.title}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral">
          {protocolsData.subtitle}
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {protocolsData.steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start space-x-6 bg-brand-primary-medium p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-3xl font-sans font-bold text-brand-cta-green">
              {step.name.split(".")[0]}.
            </div>
            <div>
              <h3 className="text-2xl font-sans font-semibold text-brand-white">
                {step.name.split(".")[1].trim()}
              </h3>
              <p className="mt-1 font-serif text-brand-neutral/90">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/**
 * Sección que muestra el equipamiento de buceo.
 */
const EquipmentSection = ({ equipmentData }) => {
  // Mapeo de IDs a componentes de íconos para un renderizado dinámico.
  const icons = {
    regulator: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    bcd: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    computer: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <section className="py-20 px-4 bg-brand-primary-medium border-t-2 border-brand-primary-light/10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase">
          {equipmentData.title}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral">
          {equipmentData.subtitle}
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentData.items.map((item) => (
            <div
              key={item.id}
              className="bg-brand-primary-dark p-8 rounded-lg shadow-xl text-center"
            >
              <div className="text-brand-cta-green inline-block mb-4">
                {icons[item.icon]}
              </div>
              <h3 className="text-2xl font-sans font-bold text-brand-white">
                {item.name}
              </h3>
              <p className="mt-2 font-serif text-brand-neutral/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Sección que muestra las certificaciones y alianzas.
 */
const CertificationsSection = ({ certificationsData }) => (
  <section className="py-20 px-4 bg-brand-primary-dark">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase">
          {certificationsData.title}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral">
          {certificationsData.subtitle}
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {certificationsData.partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-brand-primary-medium p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center text-center md:text-left gap-6"
          >
            <div className="flex-shrink-0">
              <img
                src={partner.logoUrl}
                alt={`Logo de ${partner.name}`}
                className="h-20 md:h-24"
              />
            </div>
            <div>
              <h3 className="text-2xl font-sans font-bold text-brand-white">
                {partner.name}
              </h3>
              <p className="mt-2 font-serif text-brand-neutral/80">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Componente Principal de la Página ---

/**
 * Página de Seguridad que compone las diferentes secciones.
 * Orquesta la animación de entrada de todas sus secciones.
 */
const Seguridad = () => (
  <>
    <SEO title={data.seo.title} description={data.seo.description} />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.div variants={fadeInFromBottom}>
        <PageHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          imageUrl={data.header.imageUrl}
        />
      </motion.div>
      <motion.div variants={fadeInFromBottom}>
        <ProtocolsSection protocolsData={data.protocols} />
      </motion.div>
      <motion.div variants={fadeInFromBottom}>
        <EquipmentSection equipmentData={data.equipment} />
      </motion.div>
      <motion.div variants={fadeInFromBottom}>
        <CertificationsSection certificationsData={data.certifications} />
      </motion.div>
    </motion.div>
  </>
);

export default Seguridad;
