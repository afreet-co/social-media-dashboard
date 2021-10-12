const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/themes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "lime-green": "hsl(163, 72%, 41%)",
      "bright-red": "hsl(356, 69%, 56%)",

      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      "instagram-from": "hsl(37, 97%, 70%)",
      "instagram-to": "hsl(329, 70%, 58%)",
      youtube: "hsl(348, 97%, 39%)",

      "dark-toggle-from": "hsl(210, 78%, 56%)",
      "dark-toggle-to": "hsl(146, 68%, 55%)",
      "light-toggle": "hsl(230, 22%, 74%)",

      dark: {
        bg: "hsl(230, 17%, 14%)",
        "bg-pattern": "hsl(232, 19%, 15%)",
        "card-bg": "hsl(228, 28%, 20%)",
        "muted-text": "hsl(228, 34%, 66%)",
        text: "hsl(0, 0%, 100%)",
      },
      light: {
        bg: "hsl(0, 0%, 100%)",
        "bg-pattern": "hsl(225, 100%, 98%)",
        "card-bg": "hsl(227, 47%, 96%)",
        "muted-text": "hsl(228, 12%, 44%)",
        text: "hsl(230, 17%, 14%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        "most-widest": "0.3em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
