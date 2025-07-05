import React from "react";
import { motion } from "framer-motion";
import { nosotrosPageData as data } from "../data/siteData";
import { staggerContainer, fadeInFromBottom } from "../utils/animations";
import SEO from "../components/SEO";

// --- Subcomponentes de Presentación ---

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2 flex-shrink-0 text-brand-cta-yellow"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.35 9.393c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const PageHeader = ({ title, subtitle, imageUrl }) => (
  <section
    className="relative h-80 bg-cover bg-center text-brand-white flex items-center justify-center text-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-brand-primary-dark/70"></div>
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

const HistorySection = ({ historyData }) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    viewport={{ once: true, amount: 0.2 }}
    className="py-20 px-4 bg-brand-primary-dark"
  >
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeInFromBottom}>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-white mb-6">
          {historyData.title}
        </h2>
        <div className="space-y-4 font-serif text-lg text-brand-neutral/90">
          {historyData.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeInFromBottom}
        className="h-[500px] rounded-lg overflow-hidden shadow-2xl"
      >
        <img
          src={historyData.imageUrl}
          alt="Historia de JustDiveCol"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </motion.section>
);

const TeamSection = ({ teamData }) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="py-20 px-4 bg-brand-primary-medium"
  >
    <div className="container mx-auto text-center">
      <motion.h2
        variants={fadeInFromBottom}
        className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase"
      >
        {teamData.title}
      </motion.h2>
      <motion.p
        variants={fadeInFromBottom}
        className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral"
      >
        {teamData.subtitle}
      </motion.p>
      <motion.div
        variants={staggerContainer}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamData.members.map((member) => (
          <motion.div
            variants={fadeInFromBottom}
            key={member.id}
            className="bg-brand-primary-dark p-6 rounded-lg shadow-xl text-center flex flex-col"
          >
            <img
              src={member.imageUrl}
              alt={`Foto de ${member.name}`}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-cta-green"
            />
            <h3 className="mt-4 text-2xl font-sans font-bold text-brand-white">
              {member.name}
            </h3>
            <p className="text-md font-sans font-semibold text-brand-cta-orange uppercase tracking-wider">
              {member.role}
            </p>
            <p className="mt-4 font-serif text-brand-neutral/80 flex-grow text-justify">
              {member.bio}
            </p>
            {member.funFacts && (
              <div className="mt-6 border-t border-brand-primary-light/20 pt-4 text-left">
                <ul className="space-y-2">
                  {member.funFacts.map((fact, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <StarIcon />
                      <span className="text-brand-neutral/90">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const CommitmentSection = ({ commitmentData }) => {
  const icons = {
    leaf: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 3 9-3a12.02 12.02 0 00-3.382-8.94"
        />
      </svg>
    ),
    heart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21.75l-7.682-7.682a4.5 4.5 0 010-6.364z"
        />
      </svg>
    ),
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 bg-brand-primary-dark"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeInFromBottom}
          className="text-4xl md:text-5xl font-sans font-bold text-brand-white uppercase"
        >
          {commitmentData.title}
        </motion.h2>
        <motion.p
          variants={fadeInFromBottom}
          className="mt-4 max-w-3xl mx-auto font-serif text-lg text-brand-neutral"
        >
          {commitmentData.subtitle}
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {commitmentData.points.map((point) => (
            <motion.div
              variants={fadeInFromBottom}
              key={point.id}
              className="flex flex-col items-center"
            >
              <div className="text-brand-cta-green mb-4">
                {icons[point.icon]}
              </div>
              <h3 className="text-2xl font-sans font-semibold text-brand-white">
                {point.title}
              </h3>
              <p className="mt-2 font-serif text-brand-neutral/80">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Componente Principal de la Página ---

const Nosotros = () => {
  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} />
      {/* El contenedor principal ya no necesita animaciones, se las hemos dado a cada sección. */}
      <div>
        <PageHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          imageUrl={data.header.imageUrl}
        />
        <HistorySection historyData={data.history} />
        <TeamSection teamData={data.team} />
        <CommitmentSection commitmentData={data.commitment} />
      </div>
    </>
  );
};

export default Nosotros;
