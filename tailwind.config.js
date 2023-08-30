/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      backgroundColor: {
        'FFF6E4': '#FFF6E4',
      },

      colors: {
        'FFF6E4': '#FFF6E4',
        'C22E2E': '#C22E2E',  
        '0C3E78': '#0C3E78',
      },

      fontFamily: {
        'sans': ['Helvetica', 'sans-serif'],
      },
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
}