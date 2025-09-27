/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '976px',
},
    extend: {
     fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inknut: ['Inknut Antiqua', 'serif'],
        jacques: ['Jacques François', 'serif'],
        playwrite: ['Playwrite HU', 'sans-serif'],
        hand: ['Just Another Hand', 'cursive'],
        gloock: ['Gloock', 'sans-serif'],
        lubrifont: ['WDXL Lubrifont TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
