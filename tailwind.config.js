/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['caflisch-script-pro', 'ui-sans-serif'],
      'serif': ['Old Standard TT', 'ui-serif'],
    },
    screens: {
      'xs': '560px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        wlgreen: '#053330',
        wlgreenlight: '#074a46',
        wlgold: '#9f8223',
        white: 'white'
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

