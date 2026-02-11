/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf8fc',
          100: '#f3eef8',
          200: '#e8ddf1',
          300: '#d6c4e6',
          400: '#b89dd4',
          500: '#9975c0',
          600: '#7d5ba6',
          700: '#644886',
          800: '#4f3a6a',
          900: '#3d2e52',
        },
        dark: {
          50: '#2a2a2e',
          100: '#1f1f23',
          200: '#16161a',
          300: '#0f0f12',
          400: '#0a0a0c',
          500: '#050506',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
