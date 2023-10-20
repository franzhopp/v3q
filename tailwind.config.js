/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      backgroundColor: {
        'FFF6E4': '#FFF6E4',
        '0c3e78': '#0C3E78',
        'pink': '#E18AB0',
      },
      colors: {
        'FFF6E4': '#FFF6E4',
        'C22E2E': '#C22E2E',
        '0C3E78': '#0C3E78',
        '3E9BF0': '#3E9BF0',
        'E18AB0': '#E18AB0',
        '00E189': '#00E189',
        'EF0039': '#EF0039',
      },
      fontFamily: {
        'sans': ['Helvetica', 'sans-serif'],
        'aoboshi': ['Aoboshi One', 'sans-serif'],
        'arial': ['Arial'],
        'emblema': ['Emblema One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
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