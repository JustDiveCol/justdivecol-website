import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Se importan los datos principales de la página.
import { experiencesPageData as data } from "../data/siteData";
// Se importan los componentes reutilizables que conforman la página.
import UpcomingTrips from "../components/UpcomingTrips";
import CustomTripCTA from "../components/CustomTripCTA";
// Se importan las animaciones reutilizables.
import { staggerContainer, fadeInFromBottom } from "../utils/animations";

import SEO from "../components/SEO";

// --- Funciones de Ayuda (Helpers) ---

/**
 * Función de ayuda para formatear un rango de fechas en un formato amigable.
 * @param {string} start - La fecha de inicio en formato 'YYYY-MM-DD'.
 * @param {string} end - La fecha de fin en formato 'YYYY-MM-DD'.
 * @returns {string} - La fecha formateada, ej: "5 - 10 de agosto, 2025".
 */
const formatDateRange = (start, end) => {
  if (!start || !end) return "Fechas no disponibles";
  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");
  const yearOption = { year: "numeric" };

  const startDay = startDate.toLocaleDateString("es-ES", { day: "numeric" });
  const endDay = endDate.toLocaleDateString("es-ES", { day: "numeric" });
  const month = startDate.toLocaleDateString("es-ES", { month: "long" });
  const year = startDate.toLocaleDateString("es-ES", yearOption);

  if (startDate.getMonth() === endDate.getMonth()) {
    return `${startDay} - ${endDay} de ${month}, ${year}`;
  }
  return `${startDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  })} - ${endDate.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
};

// --- Subcomponentes de la Página ---

/**
 * Tarjeta que representa una categoría de experiencia (certificaciones o expediciones).
 */
const ExperienceCategoryCard = ({ experience }) => {
  const Component = experience.link.startsWith("#") ? "a" : Link;
  const props = experience.link.startsWith("#")
    ? { href: experience.link }
    : { to: experience.link };

  return (
    <motion.div
      variants={fadeInFromBottom}
      className="relative group h-96 rounded-lg overflow-hidden shadow-2xl w-full max-w-sm"
    >
      <Component {...props} className="block h-full w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${experience.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <p className="font-sans text-sm uppercase tracking-widest text-brand-cta-orange font-semibold">
            {experience.category}
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-sans font-bold">
            {experience.title}
          </h3>
        </div>
      </Component>
    </motion.div>
  );
};

/**
 * Sección reutilizable para listar cursos o expediciones dinámicamente.
 * Carga los datos de cada ítem a partir de una lista de IDs.
 */
const CatalogSection = ({ id, title, itemIds, type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      if (!itemIds?.length) return;
      try {
        const folder = type === "course" ? "courses" : "trips";
        const modules = await Promise.all(
          itemIds.map((itemId) => import(`../data/${folder}/${itemId}.js`))
        );
        const loadedItems = modules.map((mod) => mod[Object.keys(mod)[0]]);
        setItems(loadedItems);
      } catch (error) {
        console.error(`Error loading ${type} items:`, error);
        setItems([]);
      }
    };
    loadItems();
  }, [itemIds, type]);

  return (
    <motion.section
      variants={fadeInFromBottom}
      id={id}
      className="py-20 px-4 border-t-2 border-brand-primary-light/20 scroll-mt-20"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-white text-center mb-12 uppercase">
          {title}
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInFromBottom}
              className="bg-brand-primary-medium rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm"
            >
              <img
                src={item.header?.imageUrl}
                alt={`Imagen de ${item.name}`}
                className="w-full h-56 object-cover bg-brand-primary-light"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-sans text-brand-white">
                  {item.name || "Experiencia sin nombre"}
                </h3>
                <p className="mt-2 font-serif text-brand-neutral flex-grow">
                  {item.description?.paragraphs?.[0]?.substring(0, 100) ??
                    "Próximamente más detalles..."}
                  ...
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="font-sans font-bold text-xl text-brand-cta-green">
                    {item.details?.items?.find((d) => d.label === "Precio")
                      ?.value ?? "Consultar"}
                  </span>
                  <span className="font-serif text-sm text-brand-neutral bg-brand-primary-light px-3 py-1 rounded-full text-center">
                    {type === "trip"
                      ? formatDateRange(
                          item.details?.startDate,
                          item.details?.endDate
                        )
                      : item.details?.items?.find((d) => d.label === "Duración")
                          ?.value}
                  </span>
                </div>
              </div>
              <Link
                to={`/${
                  type === "course" ? "certificaciones" : "expediciones"
                }/${item.id}`}
                className="block bg-brand-cta-orange text-center text-brand-white font-bold uppercase p-3 hover:bg-opacity-90 transition-colors"
              >
                Ver Detalles
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

/**
 * Componente principal de la página de Experiencias.
 * Orquesta la animación y el renderizado de todas las secciones de la página.
 */
const Experiencias = () => {
  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-brand-primary-dark"
      >
        <motion.div variants={fadeInFromBottom}>
          <div className="pt-24 pb-16 text-center bg-brand-primary-medium">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-sans font-extrabold uppercase text-brand-white">
                {data.header.title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral">
                {data.header.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.section variants={fadeInFromBottom} className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-8"
            >
              {data.categories.map((exp) => (
                <ExperienceCategoryCard key={exp.id} experience={exp} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.div variants={fadeInFromBottom}>
          <UpcomingTrips
            title={data.upcomingTrips.title}
            subtitle={data.upcomingTrips.subtitle}
          />
        </motion.div>

        {data.fullCatalog?.courses && (
          <motion.div variants={fadeInFromBottom}>
            <CatalogSection
              id={data.fullCatalog.courses.sectionId}
              title={data.fullCatalog.courses.title}
              itemIds={data.fullCatalog.courses.itemIds}
              type="course"
            />
          </motion.div>
        )}

        {data.fullCatalog?.expeditions && (
          <motion.div variants={fadeInFromBottom}>
            <CatalogSection
              id={data.fullCatalog.expeditions.sectionId}
              title={data.fullCatalog.expeditions.title}
              itemIds={data.fullCatalog.expeditions.itemIds}
              type="trip"
            />
          </motion.div>
        )}

        {data.customTripCta && (
          <motion.div variants={fadeInFromBottom}>
            <CustomTripCTA data={data.customTripCta} />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Experiencias;
