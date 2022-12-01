import { ArrowBotton } from '../../assets/ArrowBotton'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Result } from '../../interfaces/ArrayPokemonDeta'

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
   return (
      <>
         <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
               <button className=" text-sm leading-3 flex items-center font-medium text-zinc-100 bg-gray-500 uppercase rounded-full px-5 py-1 lg:px-7 lg:py-2 ">
                  sort by
               </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
               <DropdownMenu.Content sideOffset={5}>
                  {/* <DropdownMenu.Label /> */}
                  <DropdownMenu.Item />

                  <DropdownMenu.Group className="bg-white rounded py-2">
                     <DropdownMenu.Item>
                        <button
                           className=" leading-3 flex items-center font-medium hover:bg-slate-300 px-4 py-1 text-sm capitalize md:text-lg  text-zinc-600"
                           onClick={() => func(ArrayPokemons)}
                        >
                           <ArrowBotton className="h-[13px] w-[9px] md:h-[18px] md:w-[11px]" />
                           #increasing
                        </button>
                     </DropdownMenu.Item>
                     <DropdownMenu.Item>
                        <button
                           className=" leading-3 flex items-center font-medium hover:bg-slate-300 px-4 py-1 text-sm capitalize md:text-lg  text-zinc-600"
                           onClick={() => func(reverseArrayPokemons)}
                        >
                           <ArrowBotton className="h-[13px] w-[9px] md:h-[18px] md:w-[11px]  rotate-180" />
                           #decreasing
                        </button>
                     </DropdownMenu.Item>
                  </DropdownMenu.Group>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Arrow />
               </DropdownMenu.Content>
            </DropdownMenu.Portal>
         </DropdownMenu.Root>
      </>
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
