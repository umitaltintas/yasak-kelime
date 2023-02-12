const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        taboo: 'FF0000',

        primary: {
          100: '#F5F5F5',
          200: '#F38181',
          300: '#E95678',
          400: '#C02652',
          500: '#7C2558',
          600: '#561B41',
          700: '#341326',
        },
        secondary: {
          100: '#ADD8E6',
          200: '#D1F9B6',
          300: '#A7F08D',
          400: '#79E65F',
          500: '#57D433',
          600: '#40B32C',
          700: '#2B8A25',
        },
        text_background: {
          100: '#999999',
        },
        hover: {
          // blue
          100: '#F0F5FF',
          200: '#D6E4FF',
          300: '#ADC6FF',
          400: '#7B9EFF',
          500: '#4671FF',
          600: '#3659D9',
          700: '#244AA8',
        },
      },
    },
  },
  plugins: [],
};
