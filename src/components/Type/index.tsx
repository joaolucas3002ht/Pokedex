interface TypeProps {
   type: string
   damageValue?: string
}

export const Type = ({ type, damageValue }: TypeProps) => {
   const gb = `bg-${type}`

   return (
      <div
         className={` py-1 px-2 rounded-2xl font-bold text-zinc-800 text-[0.625rem] leading-[0.875rem] capitalize ${gb} md:text-sm md:py-1 md:px-3 flex gap-1 justify-center items-center`}
      >
         <span>{type} </span>
         {damageValue && (
            <span className="bg-zinc-200/40 p-[.125rem] rounded  md:p-1">
               {damageValue}
            </span>
         )}
      </div>
   )
}
