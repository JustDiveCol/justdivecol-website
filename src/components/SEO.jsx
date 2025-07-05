import React from "react";

/**
 * Componente para gestionar el SEO de una página usando las capacidades nativas de React.
 * @param {string} title - El título que aparecerá en la pestaña del navegador.
 * @param {string} description - La descripción para los motores de búsqueda.
 */
const SEO = ({ title, description }) => {
  return (
    <>
      {/* React moverá automáticamente estas etiquetas al <head> del documento. */}
      <title>{`${title} | JustDiveCol`}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default SEO;
