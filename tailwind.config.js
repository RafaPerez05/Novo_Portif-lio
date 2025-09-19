/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Futuristic color scheme: dark gray, blue, white
				'cyber-dark': '#0a0a0a',
				'cyber-gray': '#1a1a1a',
				'cyber-light-gray': '#2a2a2a',
				'cyber-blue': '#0ea5e9',
				'cyber-blue-dark': '#0284c7',
				'cyber-blue-light': '#38bdf8',
				'cyber-purple': '#8b5cf6',
				'cyber-green': '#10b981',
				'cyber-white': '#ffffff',
				'cyber-off-white': '#f8fafc',
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0ea5e9',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#1a1a1a',
					foreground: '#ffffff',
				},
				accent: {
					DEFAULT: '#8b5cf6',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backgroundImage: {
				'gradient-cyber': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
				'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.5 },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px #0ea5e9' },
					'50%': { boxShadow: '0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}