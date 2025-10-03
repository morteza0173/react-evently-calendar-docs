import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 🔑 پوشه src
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{md,mdx}", // 🔑 فایل‌های داک
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
