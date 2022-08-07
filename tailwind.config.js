module.exports = {
  content: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily :{
        'sans': '"Open Sans", Arial, sans-serif',
        'inter': 'Inter, sans-serif',
		    'pixel': '"PixelEmulator", sans-serif'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
