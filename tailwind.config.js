module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "main-font": "#4c4c4c"
      }
    },
  },
  variants: {},
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
}
