/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        breath: {
          '0%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s forwards',
        'fade-out': 'fade-out 1s forwards',
        'move-left': 'move-left 1s forwards',
        'move-right': 'move-right 1s forwards',
        breath: 'breath 1s infinite forwards',
      },
    },
  },
  plugins: [],
};
