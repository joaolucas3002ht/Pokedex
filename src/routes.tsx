import { Route, Routes as RoutesDom } from 'react-router-dom'
import { Pokedex } from './pages/Pokedex'
import { Pokemon } from './pages/Pokemon'

export function Routes() {
   return (
      <>
         <RoutesDom>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
         </RoutesDom>
      </>
   )
}
