import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Se importan los datos necesarios
import { contactoPageData, footerData } from "../data/siteData";
import logo from "../assets/logo-blanco-horizontal.png";

// --- Íconos personalizados SVG ---
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>
);
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
  </svg>
);
const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="3" y="5" width="18" height="14" rx="4"></rect>
    <path d="M10 9l5 3l-5 3z"></path>
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
  </svg>
);
const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);
const ScubaMaskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-brand-cta-orange"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8h16a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1z" />
    <path d="M10 16v-1a2 2 0 1 1 4 0v1" />
    <path d="M8 5v-1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1" />
  </svg>
);

/**
 * Componente principal del Footer.
 * Muestra información de la marca, redes sociales y copyright.
 * Incluye un botón para volver al inicio de la página.
 */
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar el botón "Volver Arriba"
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = {
    instagram: <InstagramIcon />,
    tiktok: <TikTokIcon />,
    youtube: <YouTubeIcon />,
  };

  return (
    <footer className="bg-gradient-to-t from-brand-primary-dark to-brand-primary-medium text-brand-neutral/80 font-serif relative">
      <div className="container mx-auto px-8 py-16 text-center">
        {/* Contenido principal del footer */}
        <div className="flex flex-col items-center">
          {/* CORRECCIÓN: Se utiliza el logo importado en lugar de texto */}
          <Link to="/">
            <img src={logo} alt="Logo de JustDiveCol" className="h-10 w-auto" />
          </Link>
          {/* CORRECCIÓN: Los textos ahora vienen del archivo de datos */}
          <p className="mt-4 text-lg max-w-xl">{footerData.slogan}</p>
          <p className="mt-2 text-lg max-w-xl font-sans font-semibold text-brand-white">
            {footerData.closingMessage}
          </p>

          {/* Íconos de contacto y redes sociales */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <a
              href={`https://wa.me/${contactoPageData.contactInfo.phone.replace(
                /\s/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="text-brand-neutral/70 hover:text-brand-white transition-colors"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`mailto:${contactoPageData.contactInfo.email}`}
              title="Correo"
              className="text-brand-neutral/70 hover:text-brand-white transition-colors"
            >
              <MailIcon />
            </a>
            {contactoPageData.contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="text-brand-neutral/70 hover:text-brand-white transition-colors"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="flex items-center justify-center my-10">
          <div className="flex-grow border-t border-brand-primary-light/20"></div>
          <div className="px-4">
            <ScubaMaskIcon />
          </div>
          <div className="flex-grow border-t border-brand-primary-light/20"></div>
        </div>

        {/* Copyright y créditos */}
        <div className="text-sm">
          {/* CORRECCIÓN: Los textos ahora vienen del archivo de datos */}
          <p>
            &copy; {new Date().getFullYear()} {footerData.copyright}
          </p>
          <p className="text-xs text-brand-neutral/60 mt-1">
            {footerData.credits}
          </p>
        </div>
      </div>

      {/* Botón flotante para volver arriba */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-cta-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity"
        >
          <ArrowUpIcon />
        </button>
      )}
    </footer>
  );
};

export default Footer;
