/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
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
        'fff6e4': "#fff6e4",
        '0c3e78': "#0c3e78",
        'e18ab0': "#e18ab0",
        '001c58': "#001c58",
        '1e1e20': "#1e1e20",
        '090a0a': "#090a0a",
        '061628': "#061628",
        'd83939': "#d83939",
        'fc7a44': "#fc7a44",
        'ec307a': "#ec307a",
      },
      colors: {
        'fff6e4': '#fff6e4',
        'c22e2e': '#c22e2e',
        '0c3e78': '#0c3e78',
        '3e9bf0': '#3e9bf0',
        'e18ab0': '#e18ab0',
        'f9fefe': "#f9fefe",
        '061628': "#061628",
        'd83939': "#d83939",
        '3be69e': "#3be69e",
        'ec307a': "#ec307a",
      },
      fontFamily: {
        sans: [],
        'sans': ['Helvetica', 'sans-serif'],
        'aoboshi': ['Aoboshi One', 'sans-serif'],
        'arial': ['Arial'],
        'emblema': ['Emblema One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
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
          "primary": "#c22e2e",
          "primary-focus": "#fff6e4",
          "secondary": "#fff6e4",
        },
      },
    ],
  },
}