/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eeeffF',
          100: '#d7dafF',
          200: '#b0b6fF',
          300: '#8a91fE',
          400: '#636DfC',
          500: '#4E5FFF', // Main primary color
          600: '#3f4ccc',
          700: '#2f399a',
          800: '#202766',
          900: '#101433'
        },
        success: {
          500: '#10B981'
        },
        warning: {
          500: '#F59E0B'
        },
        error: {
          500: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};