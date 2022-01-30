const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'Hiragino Sans', 'BIZ UDPGothic', 'Meiryo', 'sans-serif'],
      'heading': ['Rubik', 'Hiragino Sans', 'BIZ UDPGothic', 'Meiryo', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
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
