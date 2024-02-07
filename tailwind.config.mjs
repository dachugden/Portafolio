/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        tinny: "0.938rem",
      },
      fontFamily: {
        onest: ["Onest Variable", "Inter"],
      },
      colors: {
        primary: {
          50: "#eff3ff",
          100: "#dbe4fe",
          200: "#bfd0fe",
          300: "#93affd",
          400: "#6088fa",
          500: "#3b6cf6",
          600: "#2559eb",
          700: "#1d4ed8",
          800: "#1e44af",
          900: "#1e3a8a",
          950: "#172754",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    require("tailwindcss-animated"),
  ],
};
