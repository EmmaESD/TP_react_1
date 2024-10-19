/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Ajoute ta police personnalisée ici
      },
    },
    borderWidth: {
      0.5: "0.5px",
      1.5: "1.5px",
    },
    colors: {
      colorWhite: "#FEFEFE",
      colorGrey: "#D4D4D8",
      colorBlack: "#27272A",
      colorPurple: "#B991FF",
      colorHover: "ECECF0",
    },
  },
  plugins: [],
};
