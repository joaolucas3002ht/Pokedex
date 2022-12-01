interface BaseStatProps {
   valueStat: number
   nameStat: string
   type: string
}

export const BaseStat = ({ type, nameStat, valueStat }: BaseStatProps) => {
   const bg = `bg-${type}`

   const valueStatInPadStart = valueStat.toString().padStart(3, '000')

   setTimeout(() => {
      const setValueStat: any = document.querySelector('.' + nameStat)
      const calc = valueStat * (100 / 255)
      setValueStat.style.width = calc + '%'
   }, 5)

   return (
      <div className=" m-auto ">
         <section
            className={`flex gap-2 md:gap-3 w-100% items-center justify-center`}
         >
            <div
               className={`uppercase leading-4 text-[.625rem] font-semibold text-right  text-zinc-100 min-w-[1.5625rem] md:text-xs md:min-w-[1.84375rem] drop-shadow-2xl`}
            >
               {nameStat}
            </div>
            <div className="w-[.0625rem] h-4 md:h-5 bg-gray-400"></div>
            <div className="text-[.625rem] md:text-sm w-[1.0109rem] leading-4 text-center text-zinc-100">
               {valueStatInPadStart}
            </div>
            <div
               className={`flex justify-start items-start h-1  overflow-hidden w-full max-w-[15.9375rem]  rounded bg-gray-600 md:h-[.375rem] m-0 md:ml-1`}
            >
               <div className={`h-3 ${bg}  ${nameStat}`}></div>
            </div>
         </section>
      </div>
   )
}
