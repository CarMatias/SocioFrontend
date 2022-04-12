import { useState } from 'react'
import logo from './Icons/iconpay.png'

export default function CuotaPago(props){
    const [pay, setPago]=useState(props.valor.pago)
    console.log(props)
 
    const handlePay = (params)=>{
        /* alert("Pago Realizado con Èxito") */
        const url = "https://localhost:5001/api/Pago/" +params
        const payPost = async ()=>{
            let config = {
                method : 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            }
            const response = await fetch(url, config)
        }
        payPost()

        setPago(!props.valor.pago)
        
    }
    
    return(
        <ul>
                <li className='gi'>
                <a>{props.valor.mes}</a>
                <a>${props.valor.monto}</a>
                <a>{pay ? "✔" : "✖"}</a>
                {!pay ? <button onClick={ ()=> handlePay(props.valor.id)} className='bp'><img className='imgp' src={logo}/></button> :null}
               </li>

        </ul>
    )
}