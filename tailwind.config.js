/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'formbounce': 'button-design-formbounce 4s infinite',
      },
      keyframes: {
        'button-design-formbounce': {
          '5%, 50%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1) rotate(-5deg)' },
          '25%': { transform: 'scale(1) rotate(5deg)' },
          '30%': { transform: 'scale(1) rotate(-3deg)' },
          '35%': { transform: 'scale(1) rotate(2deg)' },
          '40%': { transform: 'scale(1) rotate(0)' },
        },
      },
      backgroundColor: {
        'FFF6E4': "#FFF6E4",
        '0c3e78': "#0C3E78",
        'pink': "#E18AB0",
        '4457BE': "#4457BE",
        '001C58': "#001c58",
        'aba497': "#282828",
        '090a0a': "#090a0a",
        '1E1E20': "#1E1E20",
        'D83939': "#D83939"

      },
      colors: {
        'FFF6E4': '#FFF6E4',
        'C22E2E': '#C22E2E',
        '0C3E78': '#0C3E78',
        '3E9BF0': '#3E9BF0',
        'E18AB0': '#E18AB0',
        'F9FEFE': "#F9FEFE",
        '042142': "#042142",
        'D83939': "#D83939"

      },
      fontFamily: {
        sans: [],
        'sans': ['Helvetica', 'sans-serif'],
        'aoboshi': ['Aoboshi One', 'sans-serif'],
        'arial': ['Arial'],
        'emblema': ['Emblema One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'gexo': ['Gexo Sans Bold', 'sans'],
        'aref': ['Aref Ruqaa', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1247px',
      '2xl': '1536px',
      'tl': '800px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes"),
          "primary": "#C22E2E",
          "primary-focus": "#FFF6E4",
          "secondary": "#FFF6E4",
        },
      },
    ],
  },
}