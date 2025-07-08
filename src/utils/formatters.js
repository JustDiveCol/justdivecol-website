/**
 * Función de ayuda para formatear un rango de fechas en un formato amigable.
 * @param {string} start - La fecha de inicio en formato 'YYYY-MM-DD'.
 * @param {string} end - La fecha de fin en formato 'YYYY-MM-DD'.
 * @returns {string|null} - La fecha formateada, ej: "5 - 10 de agosto, 2025", o null si las fechas no son válidas.
 */
export const formatDateRange = (start, end) => {
  if (!start || !end) return 'Fechas no disponibles';
  const startDate = new Date(start + 'T00:00:00');
  const endDate = new Date(end + 'T00:00:00');
  const yearOption = { year: 'numeric' };
  const startDay = startDate.toLocaleDateString('es-ES', { day: 'numeric' });
  const endDay = endDate.toLocaleDateString('es-ES', { day: 'numeric' });
  const month = startDate.toLocaleDateString('es-ES', { month: 'long' });
  const year = startDate.toLocaleDateString('es-ES', yearOption);

  if (startDate.getMonth() === endDate.getMonth()) {
    return `${startDay} - ${endDay} de ${month}, ${year}`;
  }
  return `${startDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  })} - ${endDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}`;
};
