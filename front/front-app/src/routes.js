import api from './api/api'
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

export default function Routers(){
    const token = localStorage.getItem('@Netlex:token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return(
        <BrowserRouter> 
            <Routes>            
                <Route path='/' element={<Login />} />                                            
                <Route path='metodo1' element={ token ? <Metodo1 /> : <Navigate to='/'/> } />
                <Route path='metodo2' element={ token ? <Metodo2 /> : <Navigate to='/'/> } />
                <Route path='metodo3' element={ token ? <Metodo3 /> : <Navigate to='/'/>  } />
        
            </Routes>
        </BrowserRouter>
    ) 
}

