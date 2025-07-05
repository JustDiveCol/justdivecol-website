/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary-dark": "#0A264F",
        "brand-primary-medium": "#133e70",
        "brand-primary-light": "#36598B",
        "brand-neutral": "#E0E0E0",
        "brand-white": "#FFFFFF",
        "brand-cta-orange": "#FF7A00",
        "brand-cta-green": "#40D798",
        "brand-cta-yellow": "#F7D94C",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Fuente para títulos
        serif: ["Lora", "serif"], // Fuente para cuerpo de texto
      },
    },
  },
  plugins: [],
};
