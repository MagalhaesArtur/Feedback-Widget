module.exports = {
  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257E5",
        },
        cinzinha: { 800: "#09090A" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
