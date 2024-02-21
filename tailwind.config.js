/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './/**/*.{html,js}', './node_modules/flowbite/**/*.js'
],
  
  theme: {
    extend: {
      colors: {
        DarkBlue: '#2D314D',
        LimeGreen: '#31D35C',
        BrightCyan: '#2BB7DA',
        GrayishBlue: '#9698A6',
        LightGrayishBlue: '#F3F4F6',
        VeryLightGray: '#FAFAFA',
      },
      fontFamily: {
        PublicSans:'PublicSans'
      }
    },
  },
  plugins: [require('flowbite/plugin')
  ],
}

