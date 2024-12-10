import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['Inter'],
        geist: ['Geist'],
        monteserrat: ['Montserrat'],
        playfair: ['Playfair Display'],
        poppins: ['Poppins'],
        cabinate: ['Cabinet Grotesk'],

      },
      
    },
  },
  plugins: [],
} satisfies Config;
