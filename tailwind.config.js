/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        goodwilltheme: {
            primary: '#C180F7',
            secondary: '#DA297A',
            accent: '#FFE898',
            neutral: "#FFF8BC",
            "base-100": "#FFFFFF",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
