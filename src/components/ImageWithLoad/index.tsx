import { useEffect, useState, useRef } from 'react'
import { Loading } from '../../assets/Loading'

interface LoadingProps {
   url: string
   alt: string
}

export function ImageWithLoad({ url, alt }: LoadingProps) {
   let Load = true

   const [Loads, setLoads] = useState<true | false>(Load)
   const [opacity, setOpacity] = useState<string>('opacity-0')

   useEffect(() => {
      Loads ? setOpacity('opacity-0') : setOpacity('opacity-100')
   }, [Loads])

   return (
      <>
         {Loads && (
            <div className="absolute h-full z-10  w-full flex items-center justify-center ">
               <Loading className=" w-12 md:w-24 animate-spin text-slate-900" />
            </div>
         )}
         <img
            src={url}
            alt={alt}
            loading="lazy" 
            onLoad={() => setLoads(false)}
            className={`object-contain h-full  ${opacity}`}
         />
      </>
   )
}
