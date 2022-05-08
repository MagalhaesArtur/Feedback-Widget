module.exports = {
  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257E5",
        },
        pinkzin: {
          500: "rgba(240, 46, 170, 0.9)",
        },
        cinzinha: { 800: "#09090A" },
      },
    },
    boxShadow: {
      personalized:
        "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
