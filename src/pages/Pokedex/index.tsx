import { useState, useEffect } from 'react'

// Components

import { Autocomplite } from '../../components/Autocomplite'
import { PokecardOfPokedex } from '../../components/PokecardOfPokedex'
import Menu from '../../components/Menu'

// Services

import { getDetalistJson } from '../services/getDetalistJson'
import { filterUrlShapesPokemon } from '../services/filterUrlShapesPokemon'

// Interfaces

import { ArrayPokemonDeta, Result } from '../../interfaces/ArrayPokemonDeta'

// Svgs

import { PokeballOfPokedex } from '../../assets/PokeballOfPokedex'

export function Pokedex() {
   const [pokemons, setDatasPokemons] = useState<Result[]>([])
   const [pokemonsAll, setDatasPokemonsAll] = useState<Result[]>([])
   const [reversePokemonsAll, setReversePokemonsAll] = useState<Result[]>([])
   const [ArrayPokemons, setArrayPokemons] = useState<Result[]>([])

   const setData = async (url: string) => {
      const PokemonDeta: ArrayPokemonDeta = await getDetalistJson(url)
      const ArrayPokemons = PokemonDeta.results
      const urlShapesPokemon = filterUrlShapesPokemon(ArrayPokemons)
      return urlShapesPokemon
   }

   const urlFull = 'https://pokeapi.co/api/v2/pokemon/?limit=1400&offset=0'

   useEffect(() => {
      const func = async () => setDatasPokemonsAll(await setData(urlFull))
      func()
   }, [])

   useEffect(() => {
      const reverseArray = pokemonsAll.slice(0).reverse()
      setReversePokemonsAll(reverseArray)
   }, [pokemonsAll])

   useEffect(() => setArrayPokemons(pokemonsAll), [pokemonsAll])

   useEffect(() => setDatasPokemons(funcAll(ArrayPokemons)), [ArrayPokemons])

   function funcAll(ArrayAll: Result[], ArrayFilter: Result[] = []) {
      const leng = ArrayFilter.length + 24

      const array: any = ArrayAll.filter((element, index) => index + 1 <= leng)
      return array
   }

   return (
      <article className="bg-slate-800 p-3 w-full min-h-screen ">
         <div
            className={`px-3 py-6  h-full bg-gray-600 min-h-min rounded-xl flex flex-col gap-2 items-center max-w-4xl m-auto`}
         >
            <header className="flex flex-col gap-2 w-full px-4 z-10">
               <div className="flex justify-between px-[5%] z-10  relative">
                  <button onClick={() => setArrayPokemons(pokemonsAll)}>
                     <h1 className="text-2xl lg:first-line:text-3xl font-bold flex items-center gap-3 text-zinc-100 ">
                        <PokeballOfPokedex className="w-6 h-8 lg:first-line:w-8 lg:h-10" />
                        Pokedex
                     </h1>
                  </button>
                     <Menu
                        func={setArrayPokemons}
                        ArrayPokemons={pokemonsAll}
                        reverseArrayPokemons={reversePokemonsAll}
                     />
               </div>
               <Autocomplite arrayName={pokemonsAll} func={setArrayPokemons} />
            </header>
            <section className=" pt-3 flex flex-col justify-content items-center overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 z-0">
               <div className=" flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl ">
                  {pokemons.length > 0 ? (
                     pokemons.map(({ url, name }: Result, i: number) => (
                        <PokecardOfPokedex
                           url={url}
                           name={name}
                           key={`cards${i}`}
                        />
                     ))
                  ) : (
                     <h2 className="capitalize font-medium text-lg text-slate-900 mb-1">
                        pokemon not found
                     </h2>
                  )}
               </div>
            </section>
            {pokemons.length < ArrayPokemons.length && (
               <button
                  className="bg-gray-500 px-6 py-2 text-base lg:px-9 lg:py-3 mt-4 rounded-full lg:text-lg font-bold text-slate-300 "
                  onClick={() => {
                     setDatasPokemons(funcAll(ArrayPokemons, pokemons))
                  }}
               >
                  Render
               </button>
            )}
         </div>
      </article>
   )
}
