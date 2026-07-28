/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/**/*.html',
    './projeler/**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#05050a',
        foreground: '#f0f0ff',
        surface: '#0d0d16',
        border: '#1c1c30',
        'border-bright': '#2a2a44',
        'muted-foreground': '#6b6b90',
        primary: '#7c6fff',
        accent: '#a78bfa',
      },
    },
  },
  plugins: [],
};
