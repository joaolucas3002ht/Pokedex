
export interface DamageFromAndTo {
   to: SeparateDamages
   from: SeparateDamages
}

export interface SeparateDamages {
   no_damage?: Generation[]
   half_damage?: Generation[]
   double_damage?: Generation[]
}

export interface Generation {
   damageValue: string
   name: string
   url: string
}

//
