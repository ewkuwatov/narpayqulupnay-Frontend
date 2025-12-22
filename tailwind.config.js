/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007B4B',
        secondary: '#7CCC6C',
        accent: '#DBE442',
        danger: '#E03C31',
        surface: '#F1F2E4',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 5s linear infinite',
        'pulse-slow': 'pulse-slow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
