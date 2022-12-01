import { Result } from "../../interfaces/ArrayPokemonDeta"

export function filterUrlShapesPokemon(arrayResult: Result[]) {
   const urlShapesPokemon = 'https://pokeapi.co/api/v2/pokemon/10001/'

   return arrayResult.filter(
      (i: Result) => i.url.length < urlShapesPokemon.length,
   )
}