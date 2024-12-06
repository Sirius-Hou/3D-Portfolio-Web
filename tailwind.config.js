/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "react-blue": "#53C1DE",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        // "hero-pattern": "url('/src/assets/genji2.jpg')",
        // "hero-pattern": "url('/src/assets/testbg.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        protest: ["Protest Revolution", "sans-serif"],
      },
      fontSize: {
        "2xl": "32px",
      },

      gradientColorStops: theme => ({
        'react-blue-start': 'rgba(83, 193, 222, 1)',
        'react-blue-end': 'rgba(83, 193, 222, 0)',
      }),
    },
  },
  plugins: [],
};
