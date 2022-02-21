import {
        Routes, 
        Route, 
        BrowserRouter,
        Navigate 
} from 'react-router-dom'



import Login from './login/index'
import Metodo1 from './metodo1'
import Metodo2 from './metodo2'
import Metodo3 from './metodo3'

import RequireAuth from './auth.routes'


export default function Routers(){

       

    return(
        <BrowserRouter> 
            <Routes>            
                <Route path='/' element={<Login />} />                                            
                <Route path='metodo1' element={ <RequireAuth><Metodo1 /></RequireAuth>}  />
                <Route path='metodo2' element={ <RequireAuth> <Metodo2 /></RequireAuth> } />
                <Route path='metodo3' element={ <RequireAuth><Metodo3 /> </RequireAuth> } />
        
            </Routes>
        </BrowserRouter>
    ) 
}

