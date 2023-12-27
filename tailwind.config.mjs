/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.sans], // Used by tailwind as default
        title: ["Abril Fatface", "Inter", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
