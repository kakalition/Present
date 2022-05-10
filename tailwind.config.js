module.exports = {
  content: [
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.blade.php',
  ],
  theme: {
    extend: {
      colors: {
        'web-bg': '#F6F6F6',
        'primary-button': '#1BABFC',
        'secondary-button': '#393939',
        'danger-button': '#DA1E28',
        'error-bg': '#EB4D4D',
        'ui-shell': '#232323',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
