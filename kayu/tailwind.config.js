/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      boxShadow:{
        'full': '0 0 15px 5px rgba(0, 0, 0, 0.3)',
      },
      zIndex:{
        '60': '60',
      },
      colors:{
        'color1': 'rgb(253, 236, 211)',
        'color2': 'rgb(92, 25, 27)',
        'color3': 'rgb(221, 114, 60)',
        'color4': 'rgb(210, 204, 190)',
        'color5': 'rgb(107, 110, 105)',
        'color6': 'rgb(29, 48, 52)',
      },
      fontFamily:{
        'karla': '"Karla", sans-serif',
        'dm': '"DM Sans", sans-serif',
        'tajawal' : '"Tajawal", sans-serif',
        'handjet': '"Handjet", sans-serif',
        'pixelify': '"Pixelify Sans", sans-serif',
        'dela': '"Dela Gothic One", sans-serif',
        'archivo': '"Archivo Black", sans-serif',
      },
      keyframes:{
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('flowbite/plugin')
  ],
}

