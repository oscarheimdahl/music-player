/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        hard: '3px 3px 0px 0 black',
        'hard-focus': '0px 0px 0 0 black, inset 0px 0px 0px 0 black',
        'hard-active': '0px 0px 0 0 black, inset 1px 1px 0px 0 black',
      },
      fontFamily: {
        fun: ['Quicksand', 'sans-serif'], // Caveat Delius
      },
      transitionProperty: {
        'shadow-transform': 'box-shadow, transform',
      },
    },
  },
  plugins: [],
};
