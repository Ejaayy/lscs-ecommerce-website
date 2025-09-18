/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',     // bright orange (matches shopping cart)
        secondary: '#4B3F2F',   // dark brown (matches hut roof)
        accent: '#FBBF24',      // lighter orange/yellow (for highlights)
        neutral: '#fffbec',     // light beige background
      },
    },
  },
  plugins: [],
}
