import { useState } from 'react'
import './styles/Gcuota.css'
import SuccesCuota from './SuccesCuota'
import { Link } from 'react-router-dom'

export default function Gcuota(){
    const [num, setNum] = useState()
    const [precio, setPrecio] = useState(0)
    const url ='https://localhost:5001/api/Cuota/'+precio
    const fetchAPI = async ()=>{
        let config = {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(precio)
        }
        const response = await fetch(url, config)
        const num1 = await response.status
        setNum(num1)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
 
    return (
        <div>
            
            <form onSubmit={handleSubmit} className="formG">
                <p className='textG'>Ingrese el monto de la cuota a generar</p>
                <input  type="number" className='inputG' onChange={e=> setPrecio(e.target.value)}>
                </input>
                <Link to="/cuota">
                <button className='buttonG' onClick={fetchAPI}>Generar Cuota</button>

                </Link>
            </form>
        </div>
    )
}