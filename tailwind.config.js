/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import { nextui } from "@nextui-org/react";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    nextui

  ],
}

