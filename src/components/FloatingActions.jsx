import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { contactoPageData as data } from '../data/siteData';

// --- Iconos para los botones ---
const CalendarIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-7 w-7'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-7 w-7'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path
      stroke='none'
      d='M0 0h24v24H0z'
      fill='none'></path>
    <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
    <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
  </svg>
);

// --- Componente de Botón Individual Reutilizable y Mejorado ---
const ActionButton = ({ text, icon, onClick, isLink = false, href = '#' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const Component = isLink ? 'a' : 'button';

  // CORRECCIÓN: Se crea un manejador de clic que también gestiona el estado de hover.
  const handleClick = (e) => {
    // Si hay una función onClick (como la de navegación), la ejecutamos.
    if (onClick) {
      onClick(e);
    }
    // Se asegura de que el texto se oculte después de un clic/toque en móvil.
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='flex justify-end'>
      <Component
        // Se usa el nuevo manejador de clic.
        onClick={handleClick}
        href={href}
        target={isLink ? '_blank' : undefined}
        rel={isLink ? 'noopener noreferrer' : undefined}
        className='bg-brand-cta-orange text-white p-3 rounded-l-lg shadow-lg flex items-center cursor-pointer'>
        <div className='flex-shrink-0'>{icon}</div>
        <motion.div
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            marginLeft: isHovered ? '0.75rem' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='overflow-hidden'>
          <span className='font-sans font-bold text-sm whitespace-nowrap'>
            {text}
          </span>
        </motion.div>
      </Component>
    </motion.div>
  );
};

/**
 * Contenedor para los botones de acción flotantes (CTA).
 * Gestiona el layout y la animación de entrada del grupo de botones.
 */
const FloatingActions = () => {
  const navigate = useNavigate();
  const whatsappUrl = `https://wa.me/${data.contactInfo.phone.replace(
    /\s/g,
    ''
  )}?text=${encodeURIComponent(data.whatsAppAction.prefilledMessage)}`;

  const handleNavigateAndScroll = () => {
    navigate('/experiencias');
    setTimeout(() => {
      const targetElement = document.getElementById('upcoming-trips-section');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
      className='fixed top-1/2 -translate-y-1/2 right-0 flex flex-col space-y-2 z-50'>
      <ActionButton
        text='Ver Calendario'
        icon={<CalendarIcon />}
        onClick={handleNavigateAndScroll}
      />
      <ActionButton
        text='Chatear por WhatsApp'
        icon={<WhatsAppIcon />}
        isLink={true}
        href={whatsappUrl}
      />
    </motion.div>
  );
};

export default FloatingActions;
