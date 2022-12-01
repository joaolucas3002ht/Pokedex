interface TypeProps {
   type: string
}

export const Type = ({ type }: TypeProps) => {
   const gb = `bg-${type}`

   return (
      <div
         className={`py-[0.125rem] px-2 rounded-2xl font-bold text-zinc-200 text-[0.625rem] leading-[0.875rem] capitalize 
      ${gb} md:text-sm md:py-1 md:px-3
      `}
      >
         {type}
      </div>
   )
}
