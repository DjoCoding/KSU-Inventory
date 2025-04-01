/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--color-primary)', // Maps "primary" to a CSS variable
        },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}