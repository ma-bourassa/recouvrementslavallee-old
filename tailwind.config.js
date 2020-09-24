// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        grey: {
          light: "#e2e0e3",
          default: "#424043",
          dark: "#323033",
          darker: "#222023",
        },
        blue2: {
          default: "#1874B5",
        },
      },
    },
  },
  variants: { backgroundColor: ["responsive", "hover", "focus", "active"] },
  plugins: [require("@tailwindcss/custom-forms")],
};
