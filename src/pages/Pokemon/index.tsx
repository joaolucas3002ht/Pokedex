import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components

import { BaseStat } from '../../components/BaseStat'
import { AboutTitle } from '../../components/AboutTitle'
import { Type } from '../../components/Type'

// Interfaces

import {
   EditPokemonDataProps,
   EditStat,
} from '../../interfaces/EditPokemonDataProps'
import {
   FlavorTextEntry,
   PokemonDescriptionsDetail,
} from '../../interfaces/PokemonDescriptionsDetail'
import {
   Ability,
   PokemonDetail,
   Stat,
   Type as InterfaceType,
} from '../../interfaces/PokemonDetail'

import { ArrayPokemonDeta, Result } from '../../interfaces/ArrayPokemonDeta'

// Services

import { getDetalistJson } from '../services/getDetalistJson'
import { filterUrlShapesPokemon } from '../services/filterUrlShapesPokemon'

// Svgs

import { ArrowLeft } from '../../assets/ArrowLeft'
import { Balance } from '../../assets/Balance'
import { Vector } from '../../assets/Vector'
import { Pokeball } from '../../assets/Pokeball'
import { GreaterThan } from '../../assets/GreaterThan'
import { LessThan } from '../../assets/LessThan'
import { Loading } from '../../assets/Loading'

interface NextAndPreviousPokemon {
   next: string | undefined
   previous: string | undefined
}

export function Pokemon() {
   const [pokemon, setPokemon] = useState<EditPokemonDataProps>()
   const [Load, setLoad] = useState<true | false>(true)

   const params = useParams()

   useEffect(() => console.log(Load), [Load])

   useEffect(() => {
      setLoad(true)

      const func = async () => {
         const deta = editPokemonDetalist(params.id)
         setPokemon(await deta)

         setLoad(false)
      }
      func()
   }, [params])

   async function editPokemonDetalist(idPokemon: string | undefined) {
      try {
         const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
         const pokemonData: PokemonDetail = await getDetalistJson(url)

         const { name, id, types, weight, height, stats, abilities } =
            pokemonData

         const nextAndPreviousPokemon: NextAndPreviousPokemon =
            await getNextAndPreviousPokemon(id)

         const editPokemonDetalist = {
            id,
            name,
            abilities: editPokemonAbilities(abilities),
            weight: weight / 10,
            height: height / 10,
            stats: editPokemonStats(stats),
            description: await getDescriptionsPokemon(id),
            types: types.map((i: InterfaceType) => i.type.name),
            previous: nextAndPreviousPokemon.previous,
            next: nextAndPreviousPokemon.next,
         }
         return editPokemonDetalist
      } catch (error) {
         console.error(error)
         return undefined
      }
   }

   async function getNextAndPreviousPokemon(id: number) {
      const urlPokemon = `https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${
         id - 1
      }`
      const PokemonDeta: ArrayPokemonDeta = await getDetalistJson(urlPokemon)

      const next: ArrayPokemonDeta = PokemonDeta.next
         ? await getDetalistJson(PokemonDeta.next)
         : PokemonDeta.next

      const previous: ArrayPokemonDeta = PokemonDeta.previous
         ? await getDetalistJson(PokemonDeta.previous)
         : PokemonDeta.previous

      const filterNext = next?.results
         ? filterUrlShapesPokemon(next?.results)
         : next?.results

      const filterPrevious = previous?.results
         ? filterUrlShapesPokemon(previous?.results)
         : previous?.results

      return {
         next: filterNext?.[0]?.name,
         previous: filterPrevious?.[0]?.name,
      }
   }

   function editPokemonAbilities(Abilities: Ability[]) {
      return Abilities.filter((e, index) => index <= 1).map((obj: Ability) =>
         obj.ability.name.replaceAll('-', ' '),
      )
   }

   const editPokemonStats = ([
      statHP,
      statATK,
      statDEP,
      statSATK,
      statsDEP,
      statSPD,
   ]: Stat[]) => [
      { name: 'hp', baseStat: statHP.base_stat },
      { name: 'atk', baseStat: statATK.base_stat },
      { name: 'dep', baseStat: statDEP.base_stat },
      { name: 'satk', baseStat: statSATK.base_stat },
      { name: 'sdef', baseStat: statsDEP.base_stat },
      { name: 'spd', baseStat: statSPD.base_stat },
   ]

   const filterAndFormatPokemonText = (flavorText: FlavorTextEntry[]) => {
      const textLanguageENs = flavorText
         .filter((i: FlavorTextEntry) => i.language.name === 'en')
         .map((i: FlavorTextEntry) => i.flavor_text.replace(/\r|\n|\f/g, ' '))
      return textLanguageENs
   }

   const getDescriptionsPokemon = async (id: number) => {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      const texts: PokemonDescriptionsDetail = await getDetalistJson(url)
      const {
         form_descriptions: descriptions,
         flavor_text_entries: flavorText,
      } = texts

      if (descriptions.length > 0) {
         console.log(descriptions.length)
      } else {
         const textLanguageEN = filterAndFormatPokemonText(flavorText)
         return textLanguageEN[textLanguageEN.length - 1]
      }
   }

   // const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon?.id
   //    .toString()
   //    .padStart(3, '00')}.png`

   const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`

   const gb = `bg-${pokemon?.types?.[0]}`

   const text = `text-${pokemon?.types?.[0]}`

   return (
      <div
         className="flex return items-center gap-1 flex-col"
         onLoad={() => {}}
      >
         {Load && (
            <div
               className={`absolute h-auto w-auto top-1/3 -translate-x-1/2  left-1/2 z-50`}
            >
               <Loading className=" w-12 h-12 z-50  md:w-24 md:h-24 animate-spin text-slate-900 " />
            </div>
         )}
         <article className="bg-gray-500 p-3 w-full max-w-xl h-screen min-h-[39.0625rem] md:w-full md:max-w-6xl rounded-lg">
            {pokemon && (
               <div
                  className={` ${gb} p-1 w-auto h-full rounded-xl flex flex-col z-0 items-center justify-end relative overflow-hidden md:flex md:justify-between md:flex-row `}
               >
                  {pokemon.previous && (
                     <button className="absolute top-[40%] -translate-y-1/2 z-50 left-1 md:left-2  md:translate-y-0">
                        <Link to={`/pokemon/${pokemon.previous}`}>
                           <LessThan className="w-5 h-8 p-1 md:w-6 md:h-10" />
                        </Link>
                     </button>
                  )}

                  {pokemon.next && (
                     <button className="absolute top-[40%] -translate-y-1/2 z-50 right-1 md:right-2 md:translate-y-0">
                        <Link to={`/pokemon/${pokemon.next}`}>
                           <GreaterThan className="w-5 h-8 p-1 md:w-6 md:h-10" />
                        </Link>
                     </button>
                  )}

                  <div className="w-full flex flex-col z-20 items-center justify-end relative h-full md:flex-1 md:z-0 ">
                     <div className="absolute top-[35%] right-[35%] translate-x-1/2 -translate-y-1/2 min-w-[13rem] max-w-[16.125rem] md:min-w-[100%] md:-z-10">
                        <Pokeball className="w-full md:-z-30 h-full" />
                     </div>
                     <section className="absolute z-30 top-6 flex items-center w-full justify-between px-6 ">
                        <div className="flex items-center gap-3 text-zinc-200">
                           <button>
                              <Link to="/">
                                 <ArrowLeft />
                              </Link>
                           </button>
                           <h3 className="text-zinc-200 font-bold text-2xl capitalize ">
                              {pokemon.name.replaceAll('-', ' ')}
                           </h3>
                        </div>

                        <div className="text-zinc-200 font-bold text-xs md:text-sm">
                           #{pokemon.id.toString().padStart(3, '00')}
                        </div>
                     </section>
                     <div className="relative w-[80%] h-auto max-w-[15.5rem] min-w-[12rem] min-h-[12rem]  max-h-[15.5rem] z-30 md:z-0 -mb-16 md:m-0 md:h-full md:min-h-full md:w-full md:max-w-[450px] ">
                        {pokemon && (
                           <img
                              src={img}
                              alt={pokemon.name.replaceAll('-', ' ')}
                              className={`object-contain h-full  `}
                           />
                        )}
                     </div>
                  </div>
                  <section className="w-full  min-h-[65%] h-[20.75rem] bg-gray-800 rounded-xl z-10 pt-14 flex flex-col  items-center gap-3 px-5 md:w-1/2 md:gap-4 md:h-full md:justify-center ">
                     <section className="flex items-center justify-center gap-4">
                        {pokemon.types.map((type: any) => (
                           <Type key={type} type={type}></Type>
                        ))}
                     </section>
                     <h3 className={`text-sm font-bold ${text}  md:text-lg`}>
                        About
                     </h3>
                     <section className="flex w-full items-center justify-center flex-row gap-[5%]  md:gap-[7%]  text-center ">
                        <div className="">
                           <div className="text-sm  flex gap-2 items-center text-zinc-200 md:text-base">
                              <Balance />
                              {pokemon.weight}kg
                           </div>
                           <AboutTitle title={'Weight'}></AboutTitle>
                        </div>
                        <div className=" h-full w-[0.0625rem]  bg-gray-400"></div>
                        <div className="">
                           <div className="text-sm flex gap-2 items-center text-zinc-200  md:text-base">
                              <Vector />
                              {pokemon.height}m
                           </div>
                           <AboutTitle title={'Height'}></AboutTitle>
                        </div>
                        <div className="w-[0.0625rem] h-full bg-gray-400"></div>
                        <div className="text-sm text-zinc-200  md:text-base">
                           {pokemon.abilities.map((e, i) => (
                              <div key={e} className="capitalize">
                                 {e}
                              </div>
                           ))}
                           <AboutTitle title={'Moves'}></AboutTitle>
                        </div>
                     </section>
                     <p className="text-xs leading-4 font-sans text-zinc-200 md:text-sm max-w-[30rem] text-center">
                        {pokemon.description}
                     </p>
                     <h3 className={`text-sm font-bold ${text} md:text-lg`}>
                        Base Stats
                     </h3>
                     <div className=" w-full ">
                        {pokemon.stats.map((stat: EditStat) => (
                           <BaseStat
                              key={stat.name}
                              valueStat={stat.baseStat}
                              nameStat={stat.name}
                              type={pokemon?.types[0]}
                           />
                        ))}
                     </div>
                  </section>
               </div>
            )}
         </article>
      </div>
   )
}
