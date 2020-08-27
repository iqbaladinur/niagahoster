module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
}
