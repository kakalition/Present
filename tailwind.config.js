module.exports = {
  content: [
    "./resources/**/*.js",
    "./resources/**/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        "web-bg": "#F9FDFF",
        "primary-button": "#1BABFC",
        "secondary-button": "#393939",
        "danger-button": "#DA1E28"
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}
