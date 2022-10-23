/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./public/pages/programming-list-page.html","./public/pages/programming-details-page.html",
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
