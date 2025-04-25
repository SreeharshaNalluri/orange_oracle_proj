module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Custom primary color (gray-800)
        secondary: "#111827", // Custom secondary color (gray-900)
        accent: "#D1D5DB", // Custom accent color (gray-300)
        background: "#F3F4F6", // Custom background color (gray-100)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
      },
      spacing: {
        128: "32rem", // Custom spacing
      },
    },
  },
  plugins: [],
};
