import './styles/SuccesDelete.css'
import {Link} from 'react-router-dom'
import logo from './Icons/iconcheck.png'

export default function SuccesCuota(){

    return(
        <div className="sod">
             <p>Cuota Generada Correctamente</p>
             <img className='check' src={logo}></img>
             <p className='sd'>Para volver al inicio haga <Link to="/home">click aqui</Link></p>
        </div>
    )
}