/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCF8F4',
        teal: {
          DEFAULT: '#004D40',
          light: '#00695C',
          pale: '#E0F2F1',
        },
        coral: {
          DEFAULT: '#D32F2F',
          light: '#FFEBEE',
        },
        pastel: {
          yellow: '#FFF8E1',
          orange: '#FFF3E0',
          blue: '#E3F2FD',
          teal: '#E0F2F1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        soft: '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
