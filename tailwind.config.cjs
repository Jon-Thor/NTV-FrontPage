/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "programming-list-page.html","programming-details-page.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab"],
        montserrat: ["Montserrat"],
      }
    },
  },
  plugins: [],
}
