// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        grey: {
          default: "#424043",
          dark: "#323033",
        },
      },
    },
  },
  variants: { backgroundColor: ["responsive", "hover", "focus", "active"] },
  plugins: [require("@tailwindcss/custom-forms")],
};
