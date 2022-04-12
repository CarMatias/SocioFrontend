import { useState, useEffect } from 'react'
import './styles/Socio.css'

import CuotaPago from './CuotaPago'



export default function Cuota(props){
     
        const url = "https://localhost:5001/api/Cuota/"+ props.id
        const [cuota, setCuota] = useState()
        const fetchAPI = async ()=>{
            const response = await fetch(url)
            const responseJSON = await response.json()
            setCuota(responseJSON)
            console.log(responseJSON)
        }   
    useEffect(()=>{
        fetchAPI()
    },[])  

    return(
        <div className='cc' >
            <div className='ch'>
                <a>Mes</a>
                <a>Monto</a>
                <a>Pago</a>
            </div>
            {!cuota ? "Cargando" : 
            cuota.map(cuota=>
            <div> <CuotaPago valor={cuota} /></div>
            )
            }
        </div>
    )
}
