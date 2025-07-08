import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Layout principal
import App from './App.jsx';

// Páginas principales
import Home from './pages/Home.jsx';
import Experiencias from './pages/Experiencias.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Seguridad from './pages/Seguridad.jsx';
import Contacto from './pages/Contacto.jsx';
import PoliciesPage from './pages/PoliciesPage.jsx';

// Rutas dinámicas
import CertificationPage from './pages/CertificationPage.jsx';
import TripPage from './pages/TripPage.jsx';
import DestinationPage from './pages/DestinationPage.jsx';

// Otras vistas
import UnderConstructionPage from './pages/UnderConstructionPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Configuración de rutas con React Router
// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'experiencias', element: <Experiencias /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'seguridad', element: <Seguridad /> },
      { path: 'contacto', element: <Contacto /> },
      { path: 'certificaciones/:courseId', element: <CertificationPage /> },
      { path: 'expediciones/:tripId', element: <TripPage /> },
      { path: 'destinos/:destinationId', element: <DestinationPage /> },
      { path: 'politicas-de-cancelacion', element: <PoliciesPage /> },
      { path: 'proximamente', element: <UnderConstructionPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

// Renderiza la aplicación con el enrutador
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
