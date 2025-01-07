const { fontFamily } = require('tailwindcss/defaultTheme')
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./public/**/*.{jpg,jpeg,png}",
  ],
  theme: {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px'
		}
	},
  	extend: {
		fontFamily: {
			sans: ['var(--font-sans)', ...fontFamily.sans],
			serif: ['var(--font-serif)', ...fontFamily.serif],
		},
		colors: {
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			card: {
			  DEFAULT: 'var(--card)',
			  foreground: 'var(--card-foreground)'
			},
			popover: {
			  DEFAULT: 'var(--popover)',
			  foreground: 'var(--popover-foreground)'
			},
			primary: {
			  DEFAULT: 'var(--primary)',
			  foreground: 'var(--primary-foreground)'
			},
			secondary: {
			  DEFAULT: 'var(--secondary)',
			  foreground: 'var(--secondary-foreground)'
			},
			muted: {
			  DEFAULT: 'var(--muted)',
			  foreground: 'var(--muted-foreground)'
			},
			accent: {
			  DEFAULT: 'var(--accent)',
			  foreground: 'var(--accent-foreground)'
			},
			destructive: {
			  DEFAULT: 'var(--destructive)',
			  foreground: 'var(--destructive-foreground)'
			},
			border: 'var(--border)',
			input: 'var(--input)',
			ring: 'var(--ring)',
			chart: {
			  '1': 'var(--chart-1)',
			  '2': 'var(--chart-2)',
			  '3': 'var(--chart-3)',
			  '4': 'var(--chart-4)',
			  '5': 'var(--chart-5)'
			}
		  },
		  borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		  }		  
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
