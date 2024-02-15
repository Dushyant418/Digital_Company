/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'DMsans': ['DM sans']
      },
      boxShadow: {
        'card_shadow': '0px 20px 50px 0px #3B3E430D'
      }
    },
  },
  plugins: [],
}

