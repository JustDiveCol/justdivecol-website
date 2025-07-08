import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que gestiona la posición del scroll al cambiar de ruta.
 * - Si la ruta es nueva, hace scroll al inicio de la página.
 * - Si la ruta incluye un hash (#), hace scroll suave a la sección correspondiente.
 */
const RouteScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la URL tiene un hash (ej. #cursos)
    if (hash) {
      // Se usa un pequeño retraso para dar tiempo a que la página se renderice.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // 100ms es generalmente suficiente.
    } else {
      // Si no hay hash, simplemente sube al inicio de la página.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Se ejecuta cada vez que la ruta o el hash cambian.

  return null; // Este componente no renderiza nada.
};

export default RouteScrollManager;
