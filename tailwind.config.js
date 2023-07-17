/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "audiowide": ["Audiowide", "cursive"],
        "chakraPetch": ["Chakra Petch", "sans-serif"],
        "amaticSC": ["Amatic SC", "cursive"]
      },
      colors: {
        "primary": {
          "DEFAULT": "hsl(202, 100%, 19%)",
          "lighter": "hsl(202, 100%, 25%)",
          "darker": "hsl(202, 100%, 14%)",
        },
      },
      backgroundImage: {
        "profile": "url('/bg.jpg')",
        "expertise": "url('/bg-expertise.png')"
      }
    },
  },
  plugins: [],
}
