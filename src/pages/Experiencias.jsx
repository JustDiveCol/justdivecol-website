import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { experiencesPageData as data } from '../data/siteData';

import UpcomingTrips from '../components/UpcomingTrips';
import CustomTripCTA from '../components/CustomTripCTA';
import DestinationsSection from '../components/DestinationsSection';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import CatalogSection from '../components/CatalogSection';
import ExperienceCategoryCard from '../components/ExperienceCategoryCard';

import { staggerContainer, fadeInFromBottom } from '../utils/animations';

const Experiencias = () => {
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
        {/* Page Header */}
        <PageHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          imageUrl={data.header.imageUrl}
        />

        {/* 3 Main Cards Experiences */}
        <motion.section
          variants={fadeInFromBottom}
          className='py-20 px-4'>
          <div className='container mx-auto'>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              animate='show'
              className='flex flex-wrap justify-center gap-8'>
              {data.categories.map((exp) => (
                <ExperienceCategoryCard
                  key={exp.id}
                  experience={exp}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Experiences Calendar */}
        <motion.section variants={fadeInFromBottom}>
          <UpcomingTrips
            title={data.upcomingTrips.title}
            subtitle={data.upcomingTrips.subtitle}
          />
        </motion.section>

        {/* Experiences Courses */}
        {data.fullCatalog?.courses && (
          <motion.section variants={fadeInFromBottom}>
            <CatalogSection
              id={data.fullCatalog.courses.sectionId}
              title={data.fullCatalog.courses.title}
              itemIds={data.fullCatalog.courses.itemIds}
              type='course'
            />
          </motion.section>
        )}

        {/* Experiences Destinations */}
        {data.fullCatalog?.destinations && (
          <motion.section variants={fadeInFromBottom}>
            <DestinationsSection
              id={data.fullCatalog.destinations.sectionId}
              title={data.fullCatalog.destinations.title}
            />
          </motion.section>
        )}

        {/* Experiences Private/Custom */}
        {data.customTripCta && (
          <motion.section variants={fadeInFromBottom}>
            <CustomTripCTA data={data.customTripCta} />
          </motion.section>
        )}
      </motion.div>
    </>
  );
};

export default Experiencias;
