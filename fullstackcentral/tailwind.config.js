/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4353ff',
          dark: '#2f3a4f'
        },
        accent: '#7b60ff',
        text: {
          DEFAULT: '#2f3a4f',
          light: '#6b7280'
        }
      },
      maxWidth: {
        container: '1280px'
      }
    },
  },
  plugins: [],
}

