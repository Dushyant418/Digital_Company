/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'DMsans': ['DM sans']
      },
      boxShadow: {
        'card_shadow': '0px 20px 50px 0px #3B3E430D',
        'hover_box': '0px 4px 10px 2px #a963fb',
        'white_shadow': '0px 4px 10px 2px #ffffff'
      }
      // shadow- [0px_4px_10px_2px_#fffff]
    },
  },
  plugins: [],
}

