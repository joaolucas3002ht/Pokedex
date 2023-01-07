interface TypeProps {
   type: string
   damageValue?: string
}

export const Type = ({ type, damageValue }: TypeProps) => {
   const gb = `bg-${type}`

   return (
      <div
         className={`h-[1.5rem] py-1 px-3 rounded-2xl  font-bold text-zinc-800 text-[0.625rem] leading-[0.875rem] capitalize ${gb} md:text-sm md:h-[2rem] md:py-1 md:px-3 md:rounded-3xl flex gap-1 justify-center items-center`}
      >
         <span>{type} </span>
         {damageValue && (
            <span className="bg-zinc-200/40 p-[.125rem] rounded  ">
               {damageValue}
            </span>
         )}
      </div>
   )
}
