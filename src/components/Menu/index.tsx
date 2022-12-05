import { ArrowBotton } from '../../assets/ArrowBotton'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Result } from '../../interfaces/ArrayPokemonDeta'
import { MenuButton } from '../MenuButton'

interface Props {
   func: any
   ArrayPokemons: Result[]
   reverseArrayPokemons: Result[]
}

export default function Menu({
   func,
   ArrayPokemons,
   reverseArrayPokemons,
}: Props) {
   const ArrowOfDecreasing = (
      <>
         <ArrowBotton className="h-[.8125rem] w-[.5625rem] md:h-[1.125rem] md:w-[.6875rem] " />
         #decreasing
      </>
   )

   const ArrowOfIncreasing = (
      <>
         <ArrowBotton className="h-[.8125rem] w-[.5625rem] md:h-[1.125rem] md:w-[.6875rem] rotate-180" />
         #increasing
      </>
   )

   return (
      <DropdownMenu.Root>
         <DropdownMenu.Trigger asChild className="z-50">
            <button className=" text-sm h-full  leading-3 flex items-center font-medium text-zinc-100 bg-gray-500 uppercase rounded-full px-5 py-[.625rem] lg:px-7 lg:py-3 ">
               sort by
            </button>
         </DropdownMenu.Trigger>

         <DropdownMenu.Portal className="text-white bg-white">
            <DropdownMenu.Content sideOffset={5} className="z-10 ">
               <DropdownMenu.Label />

               <DropdownMenu.Group className=" bg-slate-700 rounded py-2 z-50">
                  <DropdownMenu.Item>
                     <MenuButton
                        Text={ArrowOfIncreasing}
                        Func={func}
                        ValueFunc={ArrayPokemons}
                     />
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                     <MenuButton
                        Text={ArrowOfDecreasing}
                        Func={func}
                        ValueFunc={reverseArrayPokemons}
                     />
                  </DropdownMenu.Item>
               </DropdownMenu.Group>

               <DropdownMenu.Separator />
               <DropdownMenu.Arrow />
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>
   )
}

{
   ;<>
      <DropdownMenu.Item>
         <button className="text-[10px] leading-3 flex items-center font-medium">
            ^
         </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
         <button className="text-[10px] leading-3 flex items-center font-medium">
            v
         </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
         <button className="text-[10px] leading-3 flex items-center font-medium">
            random
         </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
         <button className="text-[10px] leading-3 flex items-center font-medium">
            random
         </button>
      </DropdownMenu.Item>

      <DropdownMenu.CheckboxItem>
         <DropdownMenu.ItemIndicator />
      </DropdownMenu.CheckboxItem>

      <DropdownMenu.RadioGroup>
         {
            // <DropdownMenu.RadioItem>
            //   <DropdownMenu.ItemIndicator />
            // </DropdownMenu.RadioItem>
         }
      </DropdownMenu.RadioGroup>

      <DropdownMenu.Sub>
         <DropdownMenu.SubTrigger />
         <DropdownMenu.Portal>
            <DropdownMenu.SubContent />
         </DropdownMenu.Portal>
      </DropdownMenu.Sub>
   </>
}
