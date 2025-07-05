import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Se importa el logo desde la carpeta de assets.
// Esto permite cambiar el logo en un solo lugar.
import logo from "../assets/logo-blanco-horizontal.png";

// --- Componentes SVG para los íconos del menú móvil ---
// Usar SVGs directamente es más eficiente que importar imágenes.

const MenuIcon = () => (
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
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
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
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/**
 * Componente principal de la Barra de Navegación.
 * Es responsivo, animado y gestiona el estado del menú móvil.
 */
const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilo que se aplicará al NavLink de la página activa.
  const activeStyle = { color: "#FF7A00" }; // Color naranja de la marca

  // Array centralizado para los enlaces de navegación.
  // Facilita añadir, quitar o reordenar enlaces en el futuro.
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Experiencias", path: "/experiencias" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Seguridad", path: "/seguridad" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    // El contenedor principal de la navegación con animación de entrada.
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-primary-dark/80 backdrop-blur-md text-brand-white p-4 fixed w-full top-0 z-50 font-sans"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo que también es un enlace a la página de inicio. */}
        <NavLink
          to="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Logo de JustDiveCol" className="h-12 w-auto" />
        </NavLink>

        {/* Menú para pantallas de escritorio (a partir de 'md'). */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              // `style` recibe una función para aplicar estilos condicionales.
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="relative group text-sm font-semibold uppercase tracking-wider"
            >
              {link.name}
              {/* Span para el efecto de subrayado animado al pasar el mouse. */}
              <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-brand-cta-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </NavLink>
          ))}
        </div>

        {/* Botón para el menú móvil (solo visible en pantallas pequeñas). */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles, se renderiza condicionalmente. */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              // Al hacer clic en un enlace, se cierra el menú.
              onClick={() => setIsMenuOpen(false)}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-center py-2 hover:bg-brand-primary-medium rounded-md text-sm font-semibold uppercase tracking-wider"
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
