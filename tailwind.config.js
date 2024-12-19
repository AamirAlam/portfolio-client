/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'crypto': {
          'dark': '#0A0B0D',
          'card': '#16181D',
          'accent': '#00FFA3',
          'hover': '#00E691',
        },
      },
      animation: {
        'matrix': 'matrix 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFA3, 0 0 10px #00FFA3, 0 0 15px #00FFA3' },
          '100%': { boxShadow: '0 0 10px #00FFA3, 0 0 20px #00FFA3, 0 0 30px #00FFA3' },
        },
      },
      backgroundImage: {
        'crypto-gradient': 'linear-gradient(to right, #00FFA3, #00E691)',
        'dark-gradient': 'linear-gradient(to bottom, #0A0B0D, #16181D)',
      },
    },
  },
  plugins: [],
};