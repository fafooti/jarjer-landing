/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "product-sans": ["var(--font-product-sans)"],
      },
      colors: {
        primary: "#323232",
        secondary: {
          1: "#F0F0F0",
          2: "#BDBDBD",
        },
        accent: {
          green: "#1BCF92",
          red: "#E55249",
          yellow: "#FFC839",
        },
      },
      backgroundImage: {
        "yellow-white-gradient":
          "linear-gradient(to bottom right, #fff3e0 0%, #ffffff 50%, #fff3e0 100%)",
      },
      fontSize: {
        40: "40px",
      },

      borderRadius: {
        30: "30px",
        60: "60px",
      },
    },
  },
  plugins: [],
};
