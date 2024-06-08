/** @type {import('tailwindcss').Config} */
import { content as flowbiteContent, plugin as flowbitePlugin } from 'flowbite-react/tailwind'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",
    flowbiteContent(),
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [flowbitePlugin(), addVariablesForColors], 
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
