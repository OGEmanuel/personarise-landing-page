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
        ctaBorder: '#EBEAED',
        testiBg: '#F4F1F1',
        testiP: 'rgba(0, 0, 0, 0.6)',
        ctaButton: '#121212',
        footerBorder: 'rgba(255, 255, 255, 0.38)'
      },
    },
  },
  plugins: [],
};
