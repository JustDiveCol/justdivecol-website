// --- ANIMACIONES COMPARTIDAS (Framer Motion) ---

// Animación de aparición escalonada para contenedores con múltiples hijos.
// Los elementos hijos aparecerán uno tras otro con un retraso entre ellos.
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso de aparición entre hijos
    },
  },
};

// Animación de entrada desde abajo con desvanecimiento.
// Utilizada para animar elementos al aparecer en pantalla.
export const fadeInFromBottom = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Transición suave al aparecer
    },
  },
};
