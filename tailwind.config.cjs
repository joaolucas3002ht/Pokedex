/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './index.html',
      './src/styles/main.css',
   ],
   theme: {
      extend: {
         // margin:{
         //     margin: min(-16%, -12rem)
         // },
         colors: {
            normal: '#A8A77A',
            fire: '#EE8130',
            water: '#6390F0',
            electric: '#dfbc30',
            grass: '#7AC74C',
            ice: '#96D9D6',
            fighting: '#C22E28',
            poison: '#A33EA1',
            ground: '#E2BF65',
            flying: '#A98FF3',
            psychic: '#F95587',
            bug: '#A6B91A',
            rock: '#B6A136',
            ghost: '#735797',
            dragon: '#6F35FC',
            dark: '#705746',
            steel: '#B7B7CE',
            fairy: '#D685AD',
            none: '#BfBfBf',
         },
      },
      screens: {
         sm: '576px',
         md: '800px',
         lg: '900px',
      },
      animation: {
         spin: 'spin 0.6s linear infinite',
      },
   },
   plugins: [require('tailwind-scrollbar')],
   variants: {
      scrollbar: ['rounded'],
   },
}
