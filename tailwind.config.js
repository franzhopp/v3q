/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      borderRadius: {
        'rounded-form-56': '56px',
        'input-rounded-form-22': '22px',
      },

      height: {
        'h-f': '987px',
      },

      width: {
        'w-f': '712px',
      },

      backgroundColor: {
        'FFF6E4': '#FFF6E4',
        '0c3e78': '#0C3E78',
      },

      colors: {
        'FFF6E4': '#FFF6E4',
        'C22E2E': '#C22E2E',
        '0C3E78': '#0C3E78',
        '3E9BF0': '#3E9BF0',
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes"),
          "primary": "#3E9BF0",
          "primary-focus": "#3E9BF0",
          "secondary": "#3E9BF0",
        },
      },
    ],
  },
}