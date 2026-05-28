/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#E1D8D2',
        beige: '#D9D6CE',
        neutral: {
          DEFAULT: '#E5E5E5',
          light: '#E5E5E5',
        },
        teal: {
          DEFAULT: '#64E0D2',
          light: '#52CFC2',
          pale: '#CFE1E0',
          dark: '#4AB8AC',
        },
        coral: {
          DEFAULT: '#64E0D2',
          light: '#CFE1E0',
        },
        'brand-red': {
          DEFAULT: '#4AB8AC',
          dark: '#3DA899',
        },
        pastel: {
          yellow: '#CFE1E0',
          orange: '#D9D6CE',
          blue: '#CFE1E0',
          teal: '#CFE1E0',
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
