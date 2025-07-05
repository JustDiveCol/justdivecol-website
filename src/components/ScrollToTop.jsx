import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente funcional que fuerza el scroll de la ventana al inicio (0, 0)
 * cada vez que la ruta de la aplicación cambia.
 * No renderiza ningún elemento visual en el DOM.
 */
const ScrollToTop = () => {
  // Se utiliza el hook `useLocation` de React Router para acceder al objeto
  // de la ubicación actual y obtener el `pathname` (ej. "/experiencias").
  const { pathname } = useLocation();

  // Se utiliza el hook `useEffect` para ejecutar un efecto secundario
  // cada vez que el `pathname` cambia.
  useEffect(() => {
    // La función `window.scrollTo` mueve la vista de la ventana a las
    // coordenadas especificadas. (0, 0) es la esquina superior izquierda.
    window.scrollTo(0, 0);
  }, [pathname]); // El array de dependencias asegura que el efecto solo se ejecute cuando el pathname cambie.

  // Este componente no necesita renderizar nada, su único propósito es el efecto de scroll.
  return null;
};

export default ScrollToTop;
