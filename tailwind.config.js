// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
    extend: {
      minHeight: {
        "1/2": "50vh",
      },
      colors: {
        blue: colors.lightBlue,
        gray: colors.blueGray,
        grey: {
          light: "#525053",
          DEFAULT: "#424043",
          dark: "#323033",
          darker: "#222023",
        },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss"), require("autoprefixer")],
};
