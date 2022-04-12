import { useState } from 'react'
import './styles/DeleteSocio.css'
import SuccesDelete from './SuccesDelete'
import {Link} from 'react-router-dom'

export default function DeleteSocio(props){
    console.log(props)

    const url = 'https://localhost:5001/api/Socio/'+props.id
    const [socio, setSocio] = useState()
    const [num, setNum] = useState()
    const fetchAPI = async ()=>{
        let config = {
            method:'DELETE',
        }
        const response = fetch(url, config)
        const responseJSON = await response.json
        setSocio(responseJSON)
        const num = ((await response).status)
        setNum(num)
        
    }
    return(
        <div>
            <Link to="/delete">
            <button onClick={fetchAPI} className="delete">Eliminar</button>
            </Link>
        </div>
    )
}