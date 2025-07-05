# JustDiveCol - Sitio Web Oficial

## Descripción del Proyecto

Este repositorio contiene el código fuente del sitio web oficial de **JustDiveCol**, una agencia de experiencias de buceo en Colombia. El sitio está diseñado como una aplicación multi-página (MPA) construida con tecnologías modernas de desarrollo web, enfocada en una experiencia de usuario fluida, un diseño atractivo y una arquitectura de datos escalable.

El proyecto incluye páginas detalladas para cada curso y expedición, gestionadas a través de un sistema de plantillas y datos centralizados, lo que facilita enormemente su mantenimiento y expansión a futuro.

---

## ✨ Características Principales

* **Arquitectura Multi-Página:** Navegación robusta entre diferentes secciones gracias a `React Router DOM`.
* **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tabletas y computadoras de escritorio.
* **Animaciones y Transiciones:** Experiencia de usuario pulida con animaciones fluidas entre páginas y al interactuar con elementos, gracias a `Framer Motion`.
* **Gestión de Contenido Dinámico:** La mayor parte del contenido (textos, imágenes, precios, itinerarios) se gestiona desde archivos de datos en JavaScript, permitiendo actualizaciones rápidas sin tocar la lógica de los componentes.
* **SEO Optimizado:** Cada página genera dinámicamente sus propias etiquetas `<title>` y `<meta description>` para una mejor indexación en motores de búsqueda.
* **Páginas de Servicio:** Incluye páginas personalizadas de `404 No Encontrado` y `En Construcción` para una experiencia de usuario consistente.

---

## 🔧 Tecnologías Utilizadas

* **Vite:** Entorno de desarrollo ultrarrápido para proyectos web modernos.
* **React:** Biblioteca principal para la construcción de la interfaz de usuario.
* **Tailwind CSS:** Framework de CSS "utility-first" para un diseño rápido y personalizado.
* **Framer Motion:** Para la creación de animaciones complejas y transiciones de página.
* **React Router DOM:** Para la gestión de rutas y la navegación.
* **GitHub Pages:** Para el despliegue y hosting del sitio.

---

## 🚀 Cómo Empezar

Sigue estos pasos para levantar una copia del proyecto en tu entorno local.

### Prerrequisitos

* Tener instalado Node.js (versión 18 o superior).
* Tener instalado un gestor de paquetes como `npm` o `yarn`.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/JustDiveCol/justdivecol-website.git](https://github.com/JustDiveCol/justdivecol-website.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd tu-repositorio
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

¡Y listo! Abre http://localhost:5173 (o el puerto que te indique la terminal) en tu navegador para ver el sitio en acción.

---

## 📦 Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

* `npm run dev`: Inicia el servidor de desarrollo con Hot-Reload.
* `npm run build`: Compila y optimiza la aplicación para producción en la carpeta `dist`.
* `npm run deploy`: Despliega la versión de producción a la rama `gh-pages` de tu repositorio.
* `npm run preview`: Sirve localmente la versión de producción para previsualizarla antes del despliegue.

---

## 🌐 Despliegue

Este proyecto está configurado para un despliegue sencillo en **GitHub Pages** con un dominio personalizado. El proceso se gestiona a través del script `npm run deploy`, que utiliza la librería `gh-pages` para automatizar la construcción y subida del sitio.

Para más detalles, consulta la guía de despliegue que hemos construido.
