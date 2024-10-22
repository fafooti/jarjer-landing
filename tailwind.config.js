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
        primary: "#001B79",
      },
      backgroundImage: {
        "border-gradient":
          "linear-gradient(117.95deg,rgba(0, 27, 121, 1),rgba(22, 64, 214, 1))",
        "blue-gradient":
          "linear-gradient(to right,rgba(1, 40, 109, 1),rgba(0, 133, 207, 1))",
        "yellow-white-gradient":
          "linear-gradient(to bottom right, #fff3e0 0%, #ffffff 50%, #fff3e0 100%)",
      },
      fontSize: {
        40: "40px",
        55: "55px",
      },

      borderRadius: {
        30: "30px",
        60: "60px",
        47: "47px",
      },
      padding: {
        90: "90.37px",
        15: "15.5px",
        22: "22.5px",
      },
    },
  },
  plugins: [],
};
