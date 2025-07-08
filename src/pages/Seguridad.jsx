import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Se importan los datos y las animaciones reutilizables.
import { seguridadPageData as data } from '../data/siteData';
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

// -----------------------------
// Subcomponentes de Presentación
// -----------------------------

const ProtocolsSection = ({ protocolsData }) => (
  <section className='py-20 px-4 bg-brand-primary-dark'>
    <motion.div
      className='container mx-auto'
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0.2 }}>
      <motion.div className='text-center mb-12'>
        <motion.div variants={fadeInFromBottom}>
          <motion.h2
            variants={fadeInFromBottom}
            className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
            {protocolsData.title}
          </motion.h2>
          <motion.p
            variants={fadeInFromBottom}
            className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
            {protocolsData.subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        viewport={{ once: true, amount: 0.2 }}
        className='max-w-4xl mx-auto space-y-8'>
        {protocolsData.steps.map((step) => (
          <motion.div
            key={step.id}
            variants={fadeInFromBottom}
            className='flex items-start space-x-6 bg-brand-primary-medium p-6 rounded-lg'>
            <div className='flex-shrink-0 text-3xl font-sans font-bold text-brand-cta-green'>
              {step.name.split('.')[0]}.
            </div>
            <div>
              <h3 className='text-2xl font-sans font-semibold text-brand-white'>
                {step.name.split('.')[1].trim()}
              </h3>
              <p className='mt-1 font-serif text-brand-neutral/90'>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

const EquipmentSection = ({ equipmentData }) => {
  const icons = {
    regulator: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='1.5'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M5 13l4 4L19 7'
        />
      </svg>
    ),
    bcd: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='1.5'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    computer: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='1.5'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  };

  return (
    <section className='py-20 px-4 bg-brand-primary-medium border-t-2 border-brand-primary-light/10'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='container mx-auto text-center'>
        <motion.h2
          variants={fadeInFromBottom}
          className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
          {equipmentData.title}
        </motion.h2>
        <motion.p
          variants={fadeInFromBottom}
          className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
          {equipmentData.subtitle}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {equipmentData.items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInFromBottom}
              className='bg-brand-primary-dark p-8 rounded-lg shadow-xl text-center'>
              <div className='text-brand-cta-green inline-block mb-4'>
                {icons[item.icon]}
              </div>
              <h3 className='text-2xl font-sans font-bold text-brand-white'>
                {item.name}
              </h3>
              <p className='mt-2 font-serif text-brand-neutral/80'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const CertificationsSection = ({ certificationsData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(
    certificationsData.partners.length / ITEMS_PER_PAGE
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentPartners = certificationsData.partners.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (
    !certificationsData.partners ||
    certificationsData.partners.length === 0
  ) {
    return null;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='py-20 px-4 bg-brand-primary-dark'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeInFromBottom}
          className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase'>
            {certificationsData.title}
          </h2>
          <p className='mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral'>
            {certificationsData.subtitle}
          </p>
        </motion.div>

        {/* CORRECCIÓN: Se aumenta el ancho del contenedor de `max-w-5xl` a `max-w-7xl` */}
        <div className='relative max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className='flex flex-wrap justify-center gap-10'>
              {currentPartners.map((partner) => (
                <div
                  key={partner.id}
                  className='bg-brand-primary-medium p-8 rounded-lg shadow-xl flex flex-col text-center w-full max-w-sm'>
                  <div className='flex-shrink-0 h-24 flex items-center justify-center'>
                    <img
                      src={partner.logoUrl}
                      alt={`Logo de ${partner.name}`}
                      className='max-h-20'
                    />
                  </div>
                  <div className='mt-4 flex flex-col flex-grow'>
                    <h3 className='text-2xl font-sans font-bold text-brand-white'>
                      {partner.name}
                    </h3>
                    <p className='mt-2 font-serif text-brand-neutral/80 flex-grow'>
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <button
              onClick={handlePrev}
              className='p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Anterior'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <div className='flex space-x-2'>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPage === i
                      ? 'bg-brand-cta-orange'
                      : 'bg-brand-primary-light hover:bg-brand-neutral/50'
                  }`}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className='p-2 rounded-full bg-brand-primary-medium hover:bg-brand-cta-orange transition-colors text-white'
              aria-label='Siguiente'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

// --- Componente Principal de la Página ---

const Seguridad = () => (
  <>
    <SEO
      title={data.seo.title}
      description={data.seo.description}
    />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      exit='hidden'>
      <PageHeader
        title={data.header.title}
        subtitle={data.header.subtitle}
        imageUrl={data.header.imageUrl}
      />
      <ProtocolsSection protocolsData={data.protocols} />
      <EquipmentSection equipmentData={data.equipment} />
      <CertificationsSection certificationsData={data.certifications} />
    </motion.div>
  </>
);

export default Seguridad;
