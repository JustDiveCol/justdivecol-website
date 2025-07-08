// ========================================================================
// ARCHIVO: src/data/trips/index.js
// UBICACIÓN: Este archivo debe estar dentro de tu carpeta `src/data/trips/`.
//
// PROPÓSITO:
// Este archivo actúa como un "índice" o "registro central" de todas las
// expediciones y viajes que ofreces. Su única función es mantener una
// lista de los identificadores (IDs) de cada viaje.
//
// ¿POR QUÉ ES IMPORTANTE?
// Cuando una página (como la de certificaciones) necesita buscar en todos
// los viajes para ver cuáles ofrecen un curso específico, en lugar de
// adivinar los nombres de los archivos, simplemente consulta esta lista
// para saber qué viajes existen. Esto hace que el sistema sea mucho más
// eficiente y fácil de mantener.
//
// INSTRUCCIONES DE USO:
// CADA VEZ que crees un nuevo archivo de datos para un viaje en esta
// carpeta (ej. `expedicion-gorgona.js`), DEBES AÑADIR el 'id'
// de ese viaje a la lista `tripIds` que se encuentra a continuación.
//
// El 'id' que añadas aquí debe coincidir EXACTAMENTE con:
// 1. El nombre del archivo (sin la extensión .js).
// 2. El valor del campo `id` dentro del archivo de datos de ese viaje.
//
// ========================================================================

export const tripIds = ['expedicion-santa-marta-sept-2025'];
