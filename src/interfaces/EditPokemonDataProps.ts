import { DamageRelations } from "./RelationsOfTypePokemons"

export interface EditPokemonDataProps {
   abilities: string[]
   DamageRelations: DamageRelations[]
   id: number
   name: string
   height: number
   description: string | undefined
   stats: EditStat[]
   types: string[]
   weight: number
   next: string | undefined
   previous: string | undefined
}

export interface EditStat {
   name: string
   baseStat: number
}
