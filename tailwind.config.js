module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "main-font": "#4c4c4c",
        "footer": "#333333",
        "footer-title": "#8d8d8d",
        "brand": '#22a1f0',
        "brand-deep": '#177eda'
      }
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
}
