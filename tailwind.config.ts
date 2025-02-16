import { Config } from "tailwindcss";
import twa from "tailwindcss-animate"

export default {
  darkMode: "class",
  content: [
    "app/**/*.{ts,tsx}"
  ],
  plugins: [twa]
} satisfies Config