/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEF9F5',
        teal: {
          DEFAULT: '#1B6B6B',
          light: '#238585',
          pale: '#E0F2F1',
        },
        coral: {
          DEFAULT: '#D14D4D',
          light: '#FFEBEE',
        },
        'brand-red': {
          DEFAULT: '#8B2E2E',
          dark: '#6E2424',
        },
        pastel: {
          yellow: '#FFF8E1',
          orange: '#FFF3E0',
          blue: '#E3F2FD',
          teal: '#E0F2F1',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        soft: '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
