/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlack: 'var(--negro)',
        steelBlue: 'var(--azul-noche)',
        electricBlue: 'var(--azul-acero)',
        matteGold: 'var(--azul-acero)',
        titaniumWhite: 'var(--blanco)',
        concreteGray: 'var(--gris-acero)',
        anthracite: 'var(--antracita)',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(14, 14, 14, 0.88) 45%, rgba(14, 14, 14, 0.35) 100%)',
        'contact-overlay': 'linear-gradient(to right, rgba(30, 74, 110, 0.8), rgba(30, 74, 110, 0.8))',
      }
    },
  },
  plugins: [],
}
