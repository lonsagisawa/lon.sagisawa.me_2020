const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'Noto Sans JP', 'sans-serif'],
      'heading': ['Rubik', 'Noto Sans JP', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
