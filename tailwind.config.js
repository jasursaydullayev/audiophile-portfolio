/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'max': '768px'},
      'mobile': {'max': '375px'},
      '928': {'max': '928px'},
      '1172': {'max': '1172px'},
      'bby2': {'max': '1172px'},
      '432': {'max': '432px'},
      '493': {'max': '493px'},
      '564': {'max': '564px'},
      '600': {'max': '600px'},
      '700': {'max': '700px'},
      'yg': {'max': '720px'},
      'tsy': {'max': '987px'},
      '1060': {'max': '1060px'}
    },
    extend: {
      colors: {
        'dark-brown': '#D87D4A',
        'my-dark': '#101010',
        'white-gray': '#F1F1F1',
        'light-white': '#FAFAFA',
        'pale-pink': '#FBAF85',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

