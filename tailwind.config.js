/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'marble-wedding': "url('./public/image/marble-textured.jpeg')",
        'flower-texture': "url('./public/image/bg-flower-texture.jpeg')",
      }
    },
  },
  plugins: [],
}

