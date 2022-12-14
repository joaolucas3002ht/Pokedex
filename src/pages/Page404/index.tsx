import { ArrowLeft } from '../../assets/ArrowLeft'
import { Pokeball } from '../../assets/PageError/Pokeball'

export function Page404() {
   const returne = () => window.history.back()

   return (
      <div className=" h-full min-h-screen flex items-center justify-center ">
         <div>
            <h1 className="text-center w-full h-full  text-slate-200 text-6xl font-mono font-semibold uppercase ">
               error
            </h1>
            <h1 className="text-center  text-slate-200 text-8xl lg:text-9xl font-mono font-semibold ">
               4<Pokeball />4
            </h1>

            <p className="text-center font-medium text-slate-200 text-xl">
               Page not found
            </p>
            <button
               className="py-2 px-4 bg-slate-500 rounded-full font-semibold flex justify-center items-center gap-1 mt-2 mx-auto lg:text-3xl lg:py-3 lg:px-8"
               onClick={returne}
            >
               <ArrowLeft className="w-4 h-5 lg:w-7 lg:h-10 inline-block " />
               Return Page
            </button>
         </div>
      </div>
   )
}
