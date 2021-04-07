const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', '"Hiragino Sans"', '"BIZ UDPGothic"', 'Meiryo', 'sans-serif'],
      'heading': ['Montserrat', '"Hiragino Sans"', '"BIZ UDPGothic"', 'Meiryo', 'sans-serif'],
      'mono': ['Fira Code', 'monospace'],
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
