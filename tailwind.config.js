module.exports = {
  purge: [
      './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#E1845B',
      'secondary': '#813615',
      'danger': '#e3342f',
      'test':'#C87049',
      'myWhite':'#E2E2E2'
    }),
    divideColor: theme => ({
      ...theme('borderColors'),
      'primary': '#E1845B',
      'secondary': '#813615',
      'danger': '#e3342f',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: '#813615',
      'primary': '#E1845B',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {
      colors: {
        'myOrangeD': '#813615',
        'myOrange': '#E1845B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
