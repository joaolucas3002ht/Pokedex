import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Result } from '../../interfaces/ArrayPokemonDeta'
import { PokemonDetail } from '../../interfaces/PokemonDetail'

import { getDetalistJson } from '../../pages/services/getDetalistJson'

import { ImageWithLoad } from '../../components/ImageWithLoad'

interface DetaPokemonProps {
   id: number
   type: string
   name: string
}

export function PokecardOfPokedex({ url, name }: Result) {
   const [pokemon, setPokemon] = useState<DetaPokemonProps>()

   useEffect(() => {
      const func = async () => setPokemon(await getInfoPokemon(url))
      func()
   }, [url])

   async function getInfoPokemon(url: string) {
      try {
         const response: PokemonDetail = await getDetalistJson(url)
         const DetaPokemon = editPokemonDetalist(response)
         return DetaPokemon
      } catch (err) {
         console.log(err)
      }
   }

   function editPokemonDetalist(params: PokemonDetail) {
      const { id, types, name } = params
      const DataPokemon = {
         id,
         name,
         type: types[0].type.name,
      }
      return DataPokemon
   }

   const bg = `bg-${pokemon?.type}`

   const border = `border-${pokemon?.type}`

   const text = `text-${pokemon?.type}`

   const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`

   // const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon?.id
   //    .toString()
   //    .padStart(3, '00')}.png`

   return (
      <>
         {pokemon && (
            <button
               className={` box-border rounded-lg  ${border}   w-[8.5rem] h-[8.5rem] sm:w-[9.5rem] sm:h-[9.5rem] z-0 lg:h-[12rem] lg:w-[12rem] bg-slate-800  justify-between items-center`}
            >
               <Link aria-label={name} to={`/pokemon/${name}`}>
                  <div
                     className={`${text}  basis h-[1.5rem] lg:h-[2rem] lg:text-sm text-xs w-full pt-1 px-2 text-right rounded-t-lg `}
                  >
                     #{pokemon.id.toString().padStart(3, '00')}
                  </div>
                  <div
                     className={` w-full f-6 flex items-center justify-center`}
                  >
                     <div
                        className={`box-border relative flex w-full h-[5.5rem] sm:h-[6.5rem]  lg:h-[8rem] basis justify-center items-center `}
                     >
                        {pokemon && (
                           <ImageWithLoad
                              url={img}
                              alt={pokemon.name.replaceAll('-', ' ')}
                           />
                        )}
                     </div>
                  </div>
                  <div
                     className={`${bg} basis h-[1.5rem] lg:h-[2rem] w-full text-xs lg:text-sm text-zinc-100 font-medium flex items-center justify-center rounded-b-lg uppercase`}
                  >
                     {pokemon.name.replaceAll('-', ' ')}
                  </div>
               </Link>
            </button>
         )}
      </>
   )
}
