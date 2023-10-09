/** @type {import('tailwindcss').Config} */
const screens = {
  sm: '600px',
  md: '728px',
  lg: '1024px',
  hd: '1293px',
  shd: '1457px',
  fhd: '1794px'
}

module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens,
    extend: {
      container: {
        center: true,
        screens,
        padding: {
          DEFAULT: '.75rem',
          sm: '2rem',
          lg: '3rem',
          hd: '4rem',
          shd: '5rem',
          fhd: '6rem'
        }
      },
      colors: {
        'primary': '#060606',
        'secondary': '#4B4B4B',
        'contrast': '#FFFFFF',
        'sand-light': '#f8f4e7',
        'accent-sand': '#C99F55',
        'accent-blue': '#284FA8',
        'accent-blues': '#002e8d',
        'accent-light-blue': '#5E8AE7',
        'accent-red': '#D21A3C',
        'error': '#D21A3C',
        'paper': '#FFFFFF',
        'accent-green': '#329976',
        'divider': '#dddddd',
        'sand-light-70': '#F5F1E6B2',
        'gray-20': '#EFF5FB33',
        'gray-40': 'rgba(255, 255, 255, 0.40)',
        'gray-light': '#A7A8AF',
        'blackout-50': '#00000080',
        'blackout-35': '#06060659',
        'default-bg': '#F9F3F0',
        'default-bg-70': '#F9F3F0B2',
        'placeholder-color': '#A7A8AF',
        'blue-bg': '#EFF5FB',
        'auth-blue': '#0077FF',
        'auth-orange': '#FF7700',
        'auth-red': '#FC3F1D'
      },
      screens,
    },
    fontFamily:{
      'din-pro': ['din-pro']
    }
  },
}

