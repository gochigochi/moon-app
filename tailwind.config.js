/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "moonrotation": "moonrotation 4s linear",
      },
      keyframes: {
        moonrotation: {
          "0%": { transform: "rotate(0deg)"},
          "100%": { transform: "rotate(360deg)"},
        } 
      }
    },
  },
  plugins: [],
}

