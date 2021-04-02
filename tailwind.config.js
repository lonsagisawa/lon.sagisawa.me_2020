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
      'sans': ['Inter', '"Hiragino Sans"', '"BIZ UDPGothic"', 'Meiryo', 'sans-serif'],
      'heading': ['Montserrat', '"Hiragino Sans"', '"BIZ UDPGothic"', 'Meriyo', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
