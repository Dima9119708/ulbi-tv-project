/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
      }
    },
    fontFamily: {
      sans: ['SF Pro Display', 'sans-serif'],
    },
    fontSize: {
      m: '1.6rem',
      l: '2.4rem',
    },
    lineHeight: {
      m: '2.4rem',
      l: '3.2rem',
    },
  },
  plugins: [
    (api) => {}
  ],
}

