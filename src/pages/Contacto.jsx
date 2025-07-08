import React from 'react';
import { motion } from 'framer-motion';
import { contactoPageData as data } from '../data/siteData';
// Se importan las animaciones consistentes para la página.
import { staggerContainer, fadeInFromBottom } from '../utils/animations';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

// -----------------------------
// Iconos SVG reutilizables
// -----------------------------

const MailIcon = () => (
  <svg
    className='h-6 w-6 mr-3 text-brand-cta-green'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    className='h-6 w-6 mr-3 text-brand-cta-green'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    className='h-7 w-7'
    strokeWidth='1.5'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <rect
      x='4'
      y='4'
      width='16'
      height='16'
      rx='4'
    />
    <circle
      cx='12'
      cy='12'
      r='3'
    />
    <line
      x1='16.5'
      y1='7.5'
      x2='16.5'
      y2='7.501'
    />
  </svg>
);
const TikTokIcon = () => (
  <svg
    className='h-7 w-7'
    strokeWidth='1.5'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5' />
  </svg>
);
const YouTubeIcon = () => (
  <svg
    className='h-7 w-7'
    strokeWidth='1.5'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <rect
      x='3'
      y='5'
      width='18'
      height='14'
      rx='4'
    />
    <path d='M10 9l5 3l-5 3z' />
  </svg>
);

// -----------------------------
// Componente principal de Contacto
// -----------------------------

const Contacto = () => {
  const whatsappUrl = `https://wa.me/${data.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(data.whatsAppAction.prefilledMessage)}`;

  const socialIcons = {
    instagram: <InstagramIcon />,
    tiktok: <TikTokIcon />,
    youtube: <YouTubeIcon />,
  };

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

        <motion.div variants={fadeInFromBottom}>
          <section className='py-20 px-4'>
            <div className='container mx-auto grid md:grid-cols-2 gap-12 items-center'>
              {/* Columna Izquierda: Información de contacto y redes sociales */}
              <div className='text-brand-white'>
                <h2 className='text-3xl font-sans font-bold mb-6'>
                  {data.contactInfo.title}
                </h2>
                <div className='space-y-4 font-serif text-lg'>
                  <a
                    href={`mailto:${data.contactInfo.email}`}
                    className='flex items-center hover:text-brand-cta-orange transition-colors'>
                    <MailIcon />
                    <span>{data.contactInfo.email}</span>
                  </a>
                  <a
                    href={`https://wa.me/${data.contactInfo.phone.replace(
                      /\s/g,
                      ''
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center hover:text-brand-cta-orange transition-colors'>
                    <PhoneIcon />
                    <span>{data.contactInfo.phone} (WhatsApp)</span>
                  </a>
                </div>

                <div className='mt-10'>
                  <h3 className='text-xl font-sans font-semibold mb-4'>
                    Síguenos
                  </h3>
                  <div className='flex items-center space-x-6'>
                    {data.contactInfo.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        title={social.name}
                        className='text-brand-neutral hover:text-brand-cta-orange transition-colors'>
                        {socialIcons[social.icon]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Llamado a la acción para enviar correo */}
              <div className='bg-brand-primary-medium p-8 rounded-lg text-center'>
                <h2 className='text-3xl font-sans font-bold mb-4 text-brand-white'>
                  {data.whatsAppAction.title}
                </h2>
                <p className='font-serif text-brand-neutral mb-6'>
                  {data.whatsAppAction.description}
                </p>
                <a
                  href={whatsappUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block w-full bg-brand-cta-orange text-brand-white font-sans font-bold uppercase py-4 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-cta-yellow/50'>
                  {data.whatsAppAction.buttonText}
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contacto;
