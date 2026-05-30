// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mapping your core palette
        primary: {
          DEFAULT: "#61DAFB", // React Blue
          foreground: "#0D0D0D", // Dark text on light blue
        },
        secondary: {
          DEFAULT: "#F7DF1E", // JS Yellow
          foreground: "#0D0D0D",
        },
        tertiary: {
          DEFAULT: "#222222", // Dark Gray for cards/elevated surfaces
          foreground: "#FFFFFF",
        },
        neutral: {
          DEFAULT: "#0D0D0D", // Almost black for main background
          foreground: "#FFFFFF",
        },
        // Muted tones for borders and subtle elements
        muted: "#333333",
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"], // Sets Geist as the default
        mono: ['"JetBrains Mono"', "monospace"], // Sets JetBrains for code/labels
      },
      borderRadius: {
        DEFAULT: "0.5rem", // Standardized 8px radius matching the image
      },
    },
  },
  plugins: [],
};
