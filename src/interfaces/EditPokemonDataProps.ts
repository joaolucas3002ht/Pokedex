export interface EditPokemonDataProps {
   abilities: string[]
   id: number
   name: string
   height: number
   description: string | undefined
   stats: Stats[]
   types: string[]
   weight: number
   next: string | undefined
   previous: string | undefined
}

export interface Stats {
   name: string
   baseStat: number
}
