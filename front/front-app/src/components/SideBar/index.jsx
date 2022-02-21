import { Link } from 'react-router-dom'
import { SideBar } from './style'

export default function SideBarMenu(){
    return(
        <SideBar>
            <Link to="/metodo1">Metodo 1</Link>
            <Link to="/metodo2">Metodo 2</Link>
            <Link to="/metodo3">Metodo 3</Link>
        </SideBar>
    )
}