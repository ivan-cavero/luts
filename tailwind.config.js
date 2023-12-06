/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: 'hsl(0, 0%, 7%)',
        backgroundDark2: 'hsl(0, 0%, 8.5%)',
        backgroundDarkerGray: 'hsl(0, 0%, 10%)',
        backgroundDarkGray: 'hsl(0, 0%, 15%)',
        backgroundMediumGray: 'hsl(0, 0%, 20%)',
        backgroundLightGray: 'hsl(0, 0%, 35%)',

        textWhite: 'hsl(0, 0%, 100%)',
        textLightGray: 'hsl(0, 0%, 75%)',
        textDarkGray: 'hsl(0, 0%, 60%)',

        accentBlue: 'hsl(210, 100%, 50%)',
        accentYellow: 'hsl(50, 100%, 50%)',

        buttonDark: 'hsl(0, 0%, 20%)',
        buttonTextWhite: 'hsl(0, 0%, 100%)',
        buttonAccent: 'hsl(210, 100%, 50%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
