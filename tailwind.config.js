/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Sumic Capital Brand Colors
          primary: {
            DEFAULT: "#023251", // Deep navy blue
            foreground: "#FFFFFF",
          },
          accent: {
            DEFAULT: "#04AF08", // Bright green
            foreground: "#FFFFFF",
          },
        },
      },
    },
    plugins: [],
  }