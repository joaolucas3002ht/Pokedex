import { useState, useEffect } from 'react'

interface PropsAutocomplite {
   arrayName: PropsArrayName[]
   func: any
}

interface PropsArrayName {
   name: string
   url: string
}

export function Autocomplite({ arrayName, func }: PropsAutocomplite) {
   const [valueInput, setValueInput] = useState('')
   const [TypeButton, setTypeButton] = useState<any>('submit')
   const valueLabel = 'Search'

   const filterNames = (Input: string) => {
      const value = Input.toLowerCase()

      return value
         ? arrayName.filter((e: PropsArrayName) => e?.name.includes(value))
         : []
   }

   function nameIsEgualInput(Input: string) {
      const filteredArray = filterNames(Input)
      const equal = filteredArray[0]?.name !== Input ? filteredArray : []

      return filteredArray.length <= 1 ? equal : filteredArray
   }

   useEffect(() => {
      valueInput.length > 0 ? setTypeButton('submit') : setTypeButton('button')
      filterNames(valueInput)
   }, [valueInput])

   function formData(e: any) {
      e.preventDefault()

      let text = valueInput.trim()
      while (text.includes(' ') || text.includes('--')) {
         text = text.replaceAll(' ', '-').replaceAll('--', '-')
      }
      func(filterNames(text))
      setValueInput('')
   }

   return (
      <div className="relative">
         <form
            onSubmit={formData}
            name="valform"
            action=""
            method="POST"
            className="relative flex justify-center items-center  w-[20.5rem] h-6 rounded-lg md:h-8 md:w-[23rem] m-auto"
         >
            <input
               onChange={(e) => setValueInput(e.target.value)}
               value={valueInput}
               autoComplete="off"
               type="text"
               id="Username"
               name="Username"
               className="text-xs md:text-sm w-[20.5rem] h-6 px-2 py-1 rounded-lg md:h-8 md:w-[23rem] bg-[hsl(214,13%,47%)] text-gray-300 text-center outline-none peer"
               placeholder=" "
            />
            <label
               htmlFor="Username"
               id="uint"
               className={`text-xs md:text-sm absolute text-gray-400 -z-10 transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 flex flex-row justify-center items-center peer-placeholder-shown:z-10 after:gap-2 after:content-['${valueLabel}'] after:font-light after:py-1 after:font-mono after:ml-0.5 after:text-gray-40`}
            ></label>
            <button
               type={valueInput.length > 0 ? 'submit' : 'button'}
               className="fa fa-2x text-xs md:text-sm bg-slate-900 text-slate-300 w-[2.5rem] h-6 px-2 py-1 rounded-r-lg md:h-8 md:w-[3rem] text-center absolute right-0 hover:bg-slate-700 z-0"
            >
               &#xf002;
            </button>
         </form>
         {nameIsEgualInput(valueInput).length > 0 && (
            <div
               className={
                  'w-full flex bottom-0 h-0 flex-col absolute justify-center items-center translate-y-2'
               }
            >
               <div
                  className={
                     'w-0 h-0 bottom-0 border-x-transparent border-x-8 border-b-[8px] border-gray-700 -translate-y-1/2'
                  }
               ></div>
               <ul
                  className={
                     'w-40 max-h-[134px] py-1 bg-gray-700 rounded-lg  absolute top-0 overflow-auto scrollbar-none'
                  }
               >
                  {nameIsEgualInput(valueInput).map((e: PropsArrayName, i) => (
                     <li key={`button-${i}`}>
                        <button
                           onClick={() => {
                              setValueInput(e.name)
                           }}
                           className={
                              'text-base w-full hover:bg-gray-600 p-[2px] text-gray-100'
                           }
                        >
                           {e.name}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   )
}
