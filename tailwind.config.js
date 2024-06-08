/** @type {import('tailwindcss').Config} */
import { content as flowbiteContent, plugin as flowbitePlugin } from 'flowbite-react/tailwind'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",
    flowbiteContent(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin(),],
}

