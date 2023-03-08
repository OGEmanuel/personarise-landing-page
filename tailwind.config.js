/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2DBFF',
        secondary: '#257CFF',
        para: 'rgba(21, 20, 57, 0.4)',
      },
    },
  },
  plugins: [],
};
