/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      boxShadow:{
        'full': '0 0 15px 5px rgba(0, 0, 0, 0.3)',
      },
      colors:{
        'color1': 'rgb(217,217,217)',
        'color2': 'rgb(233, 233, 232)',
        'color3': 'rgb(232, 237, 229)',
        'color4': 'rgb(167, 169, 164)',
        'color5': 'rgb(105, 87, 59)',
        'color6': 'rgb(62, 72, 42)',
        'color7': 'rgb(45, 41, 32)',
        'color8': 'rgb(121, 128, 77)',
        'color9': 'rgb(249, 249, 249)',
        'color10': 'rgb(242, 242, 242)',
        'color11': 'rgb(235, 235, 235)',
      },
      fontFamily:{
        'karla': '"Karla", sans-serif',
        'dm': '"DM Sans", sans-serif',
        'tajawal' : '"Tajawal", sans-serif',
        'handjet': '"Handjet", sans-serif',
        'pixelify': '"Pixelify Sans", sans-serif',
        'dela': '"Dela Gothic One", sans-serif'
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
      animation:{
        marquee3: 'marquee3 30s linear infinite',
        marquee4: 'marquee4 30s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('flowbite/plugin')
  ],
}

