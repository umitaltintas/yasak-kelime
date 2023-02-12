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
        primary: {
          // yellow
          100: '#FDF2E5',
          200: '#FCE8CC',
          300: '#FADB99',
          400: '#F7C948',
          500: '#F0B429',
          600: '#D39E22',
          700: '#A97F1A',
        },
        secondary: {
          //obsidian
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#A6A6A6',
          500: '#7E7E7E',
          600: '#626262',
          700: '#3D3D3D',
        },
        hover: {
          //indigo
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
