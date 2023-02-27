import { Route, Routes as RoutesDom } from 'react-router-dom';
import { Pokedex } from './pages/Pokedex';
import { Pokemon } from './pages/Pokemon';
import { Page404 } from './pages/Page404';

export function Routes() {
   return (
      <>
         <RoutesDom>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Page404 />} />
         </RoutesDom>
      </>
   );
}
