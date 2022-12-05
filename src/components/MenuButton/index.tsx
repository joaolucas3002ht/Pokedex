import { ReactNode } from 'react'

interface MenuButtonProps {
   Text: string | number | ReactNode
   Func: Function
   ValueFunc: any
}

export function MenuButton({ Text = '', Func, ValueFunc }: MenuButtonProps) {
   return (
      <>
         <button
            className=" leading-3 flex items-center font-medium hover:bg-slate-500 w-full px-4 py-1 text-sm capitalize md:text-lg  text-zinc-200  z-50"
            onClick={() => Func(ValueFunc)}
         >
            {Text}
         </button>
      </>
   )
}
