import React from 'react';
import { motion } from 'framer-motion';
import { policiesData as data } from '../data/policiesData';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { staggerContainer, fadeInFromBottom } from '../utils/animations';

const PoliciesPage = () => {
  return (
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
        <div className='container mx-auto py-16 px-4'>
          {data.sections.map((section) => (
            <motion.section
              key={section.id}
              variants={fadeInFromBottom}
              className='mb-12'>
              <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
                {section.title}
              </h2>
              <ul className='space-y-3 list-disc list-inside font-serif text-brand-neutral/90'>
                {section.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default PoliciesPage;
