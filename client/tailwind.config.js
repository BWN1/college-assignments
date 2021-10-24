module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'mobile-menu': 'min-content auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
