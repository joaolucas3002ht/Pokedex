import { useEffect, useState } from 'react'
import {
   DamageFromAndTo,
   SeparateDamages,
   Generation,
} from '../../interfaces/SeparateDamageRelations'
import { DamageRelations as propsDamageRelations } from '../../interfaces/RelationsOfTypePokemons'
import { Type } from '../Type'

interface Info {
   name: string
   url: string
}

export function DamageRelations({
   damages,
}: {
   damages: propsDamageRelations[]
}) {
   const [DamagePokemonForm, setDamagePokemonForm] = useState<SeparateDamages>()

   useEffect(() => {
      const ArrayDamage = damages.map((damage) =>
         separateObjectBetweenToAndFrom(damage),
      )

      if (ArrayDamage.length === 2) {
         const obj = joinDamageRelations(ArrayDamage)

         setDamagePokemonForm(reduceDuplicateValues(postDamageValue(obj.from)))
      } else {
         setDamagePokemonForm(postDamageValue(ArrayDamage[0].from))
      }
   }, [damages])

   useEffect(() => {}, [DamagePokemonForm])

   function filterDamageRelations(
      valueFilter: string,
      Relations: propsDamageRelations,
   ) {
      const result: SeparateDamages = Object.entries(Relations)
         .filter(([keyName, value]) => {
            return keyName.includes(valueFilter)
         })
         .reduce((acc, [keyName, value]): SeparateDamages => {
            const KeyWithValueFilterRemove: string = keyName.replace(
               valueFilter,
               '',
            )

            return (acc = { [KeyWithValueFilterRemove]: value, ...acc })
         }, {})

      return result
   }

   function separateObjectBetweenToAndFrom(
      Relations: propsDamageRelations,
   ): DamageFromAndTo {
      const from = filterDamageRelations('_from', Relations)

      const to = filterDamageRelations('_to', Relations)

      return { from, to }
   }

   function joinObjects(
      props: DamageFromAndTo[],
      string: string,
   ): SeparateDamages {
      const key = string as keyof typeof props[0]

      const FirstArrayValue = props[0][key]

      const SecondArrayValue = props[1][key]

      return Object.entries(SecondArrayValue).reduce(
         (acc, [KeyName, value]: [string, Generation]) => {
            const key = KeyName as keyof typeof FirstArrayValue

            const result = FirstArrayValue[key]?.concat(value)

            return (acc = { [key]: result, ...acc })
         },
         {},
      )
   }

   function joinDamageRelations(props: DamageFromAndTo[]): DamageFromAndTo {
      return {
         to: joinObjects(props, 'to'),
         from: joinObjects(props, 'from'),
      }
   }

   function postDamageValue(props: SeparateDamages): SeparateDamages {
      return Object.entries(props).reduce((acc, [KeyName, value]) => {
         const key = KeyName as keyof typeof props

         const ValuesOfKeyName = {
            double_damage: '2x',
            half_damage: '1/2x',
            no_damage: '0x',
         }

         return (acc = {
            [KeyName]: value.map((i: Info[]) => ({
               damageValue: ValuesOfKeyName[key],
               ...i,
            })),
            ...acc,
         })
      }, {})
   }

   function reduceDuplicateValues(props: SeparateDamages) {
      const DuplicateValues = {
         double_damage: '4x',
         half_damage: '1/4x',
         no_damage: '0x',
      }

      return Object.entries(props).reduce(
         (acc, [keyName, value]: [string, Generation[]]): SeparateDamages => {
            const key = keyName as keyof typeof props

            const verifiedValue = FilterForUniqueValues(
               value,
               DuplicateValues[key],
            )

            return (acc = { [keyName]: verifiedValue, ...acc })
         },
         {},
      )
   }

   function FilterForUniqueValues(
      valueForFiltering: Generation[],
      damageValue: string,
   ) {
      const array: Generation[] = []

      return valueForFiltering.reduce((acc, a) => {
         const { url, name } = a

         const filterACC = acc.filter((v) => v.name !== name)

         return filterACC.length === acc.length
            ? (acc = [a, ...acc])
            : (acc = [{ damageValue: damageValue, name, url }, ...filterACC])
      }, array)
   }

   return (
      <div className="flex gap-2 flex-col ">
         {DamagePokemonForm ? (
            <>
               {Object.entries(DamagePokemonForm).map(
                  ([keyName, value]: [string, Generation[]]) => {
                     const key = keyName as keyof typeof DamagePokemonForm

                     const ValuesOfKeyName = {
                        double_damage: 'Weak',
                        half_damage: 'Resistant',
                        no_damage: 'Immune',
                     }

                     return (
                        <div>
                           <h3 className=" capitalize font-medium text-sm md:text-base text-slate-500 text-center">
                              {ValuesOfKeyName[key]}
                           </h3>
                           <div className="flex flex-wrap gap-1 justify-center ">
                              {value.length > 0 ? (
                                 value.map(({ name, url, damageValue }) => {
                                    return (
                                       <Type
                                          type={name}
                                          key={url}
                                          damageValue={damageValue}
                                       />
                                    )
                                 })
                              ) : (
                                 <Type type={'none'} key={'none'} />
                              )}
                           </div>
                        </div>
                     )
                  },
               )}
            </>
         ) : (
            <div></div>
         )}
      </div>
   )
}
