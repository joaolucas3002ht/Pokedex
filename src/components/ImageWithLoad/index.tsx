import { useEffect, useState } from 'react'
import { Loading } from '../../assets/Loading'

interface LoadingProps {
   url: string
   alt: string
}

export function ImageWithLoad({ url, alt }: LoadingProps) {
   const [Load, setLoad] = useState<true | false>(true)
   const [opacity, setOpacity] = useState<string>('opacity-0')

   useEffect(() => {
      setLoad(true)
   }, [url])

   useEffect(() => {
      Load ? setOpacity('opacity-0') : setOpacity('opacity-100')
   }, [Load])

   return (
      <>
         {/* {Load && (
            <div className="absolute h-full  w-full flex items-center justify-center">
               <Loading className=" w-12 md:w-24 animate-spin text-slate-900" />
            </div>
         )} */}
         <img
            src={url}
            alt={alt}
            onLoad={() => setLoad(false)}
            className={`object-contain h-full z-30 ${opacity}`}
         />
      </>
   )
}
