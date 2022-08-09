module.exports = {
  content: [
    './pages/*.{html,js,jsx,ts,tsx,vue}',
    './layouts/*.{html,js,jsx,ts,tsx,vue}',
    './content/*.{html,js,jsx,ts,tsx,vue}',
    './components/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Open Sans", Arial, sans-serif',
        'inter': 'Inter, sans-serif',
        'pixel': '"PixelEmulator", sans-serif'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
      })
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
