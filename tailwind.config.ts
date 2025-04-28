import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"lg": "1024px",
				"xl": "1280px",
				"2xl": "1400px",
			},
		},
		extend: {
			objectPosition: {
				vid: "50% 19%;",
				chevy: "50% 19%",
			},
			backgroundImage: {
				"contact-form":
					"linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/cForm.jpg')",
				services1:
					"linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/test1.jpg')",
				landing: "url('/bg.svg')",
				services: "url('/bgWhite2.svg')",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				bebas: "var(--font-bebas)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},gold: {
					50: "hsl(40, 90%, 95%)",
					100: "hsl(40, 90%, 90%)",
					200: "hsl(40, 90%, 85%)",
					300: "hsl(40, 90%, 80%)",
					400: "hsl(40, 90%, 75%)", // #F8D386
					500: "hsl(40, 85%, 65%)",
					600: "hsl(40, 80%, 55%)",
					700: "hsl(40, 75%, 45%)",
					800: "hsl(40, 70%, 35%)",
					900: "hsl(40, 65%, 25%)",
				  },
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				fadeIn: "fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
