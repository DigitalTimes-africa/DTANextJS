/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'yuji': ['Yuji Hentaigana Akari', 'cursive'],
        'libre': ['Libre Baskerville', 'serif'],
        'gelasio': ['Gelasio', 'serif'],
        'sacramento': ['Sacramento', 'cursive'],
      },
      colors: {
        'primary-black': '#000E1E',
        'primary-green': '#7CFC00',
        'primary-blue': '#1F3347',
        'primary-white': '#FAFFF5',
        'secondary-green': '#0Add08',
        'btn-black': '#0A0C0D',
        'btn-hover': '#001932',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '2xl': '1536px',
      'xl': '1280px',
      'xlg': '1200px',
      'lg': '1025px',
      'xmd': '992px',
      'md': '768px',
      'sm': '640px',
      'xsm': '576px',
      '1xsm': '414px',
      '2xsm': '321px',
    },
  },
  darkMode: 'class',
  plugins: [],
}
