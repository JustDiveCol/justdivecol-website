import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Se importan los componentes de layout que son persistentes en todo el sitio.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Se importa el componente de utilidad que maneja el scroll.
import ScrollToTop from "./components/ScrollToTop";

/**
 * Componente principal de la aplicación que actúa como el layout general.
 * Es responsable de:
 * 1. Renderizar el Navbar y el Footer, que son visibles en todas las páginas.
 * 2. Gestionar las transiciones animadas entre las diferentes páginas.
 * 3. Asegurar que el scroll se reinicie al inicio de la página en cada cambio de ruta.
 */
const App = () => {
  // El hook `useLocation` de React Router nos da acceso al objeto de la ubicación actual.
  // Lo usamos para obtener una `key` única para cada página, lo que permite a
  // AnimatePresence detectar cuándo la página ha cambiado.
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-primary-dark">
      {/* Barra de navegación fija en todas las páginas. */}
      <Navbar />

      {/* Componente "invisible" que restaura el scroll al cambiar de ruta. */}
      <ScrollToTop />

      {/* AnimatePresence es el componente de Framer Motion que permite animar
          componentes cuando entran o salen del árbol de React.
          `mode="wait"` asegura que la animación de salida de la página vieja
          termine antes de que la nueva página comience a animar su entrada. */}
      <AnimatePresence mode="wait">
        {/* El `key` es crucial aquí. Al usar `location.pathname`, le decimos a
            AnimatePresence que este componente es "diferente" en cada URL,
            lo que activa las animaciones de entrada/salida. */}
        <main key={location.pathname} className="pt-20 flex-grow">
          {/* Outlet es el componente de React Router que renderiza la página
              que corresponde a la ruta actual (Home, Experiencias, etc.). */}
          <Outlet />
        </main>
      </AnimatePresence>

      {/* Pie de página persistente en todas las páginas. */}
      <Footer />
    </div>
  );
};

export default App;
