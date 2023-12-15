/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.875rem',
      },
      boxShadow: {
        sharp: '0 1px 1px 0 #A1A1A1',
      },
      colors: {
        'nuts-amber': {
          200: '#FFF2CC',
          300: '#FFE584',
          400: '#FFCF42',
          700: '#C66206',
        },
        'nuts-cyan': {
          200: '#DBF3F8',
          400: '#6FCEE4',
          600: '#0C7F9C',
          800: '#08596D',
        },
        'nuts-emerald': {
          900: '#025D4D',
        },
        'nuts-lime': {
          100: '#F4FAD6',
          200: '#E7F5A8',
          600: '#AED416',
          800: '#4A8500',
          900: '#417501',
        },
        'nuts-neutral': {
          100: '#F5F5F5',
          200: '#E4E3E2',
          400: '#C4C4C4',
          700: '#5E5E5E',
          800: '#525252',
          900: '#333333',
          950: '#000000',
        },
        'nuts-orange': {
          50: '#FDF4EB',
          100: '#FBEBDA',
          300: '#FFB27B',
          400: '#FF9142',
          600: '#F56905',
          950: '#5E250C',
        },
        'nuts-red': {
          200: '#FFE0EB',
          800: '#B60606',
          900: '#A10404',
        },
        'nuts-sky': {
          50: '#F4FCFF',
          100: '#E4F8FE',
          300: '#A1DBFC',
          400: '#38BDF8',
          600: '#179CE6',
          800: '#005B94',
          950: '#042548',
        },
        'nuts-stone': {
          100: '#F7F5F3',
        },
        black: {
          DEFAULT: '#333333',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        'proxima-nova': ['proxima-nova', 'sans-serif'],
        'sofia-pro': ['sofia-pro', 'sans-serif'],
        gelica: ['gelica', 'sans-serif'],
      },
      fontSize: {
        tiny: ['0.625rem', '0.6875rem'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
