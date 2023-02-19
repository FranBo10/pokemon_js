/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {screens: {
    'xs': '360px',
    // => @media (min-width: 640px) { ... }
    
    'sm': '643px',
    // => @media (min-width: 640px) { ... }

    'md': '850px',
    // => @media (min-width: 768px) { ... }

    'lg': '1183px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    colors: {
      primary: 'rgb(139,53,245)',
      secondary: 'RGB(252,233,48)',
      tertiary: 'rgb(55,97,168)',
      // ...
    },
    extend: {},
  },
  plugins: [],
  
}
