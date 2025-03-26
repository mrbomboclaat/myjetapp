/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        gray: {
          600: '#4b5563',
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
