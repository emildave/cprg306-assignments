/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#D3D3FF",
        text: "#4c1d95",
        primary: "#e0e0fa",
        secondary: "#9279BA",
      },
    },
  },
  plugins: [],
};
