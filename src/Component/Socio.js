import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './styles/Socio.css'
import Cuota from './Cuota'
import DeleteSocio from "./DeleteSocio"
import SuccesDelete from "./SuccesDelete"


 export default function Socio(props){
     const params = useParams()
    console.log(params)
    const url = "https://localhost:5001/api/Socio/"+ params.id
    const [socio, setSocio] = useState()
    const fetchAPI = async ()=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setSocio(responseJSON)
        console.log(responseJSON)
    }   
useEffect(()=>{
    fetchAPI()
},[]) 
    return(
        <div className="date-cont">

            {!socio ? "Cargando" :
            <div className="op">
                <div>
                <img className="picture" src={socio?.imageSrc}></img>
                <div className="date">

                    <a><b>Numero De Socio: </b>{socio?.nrosocio}</a>
                    <a><b>Nombre: </b>{socio?.nombre}</a>
                    <a><b>Apellido: </b>{socio?.apellido}</a>
                    <a><b>Dni: </b>{socio?.dni}</a>
                    <a><b>Telefono: </b> (+54) 297 {socio?.telefono}</a>
                <div className="deleS">
                    <DeleteSocio id={params.id}/>
                </div>
                </div>
                </div>
                <div className="cuota">
                        <h2>Cuotas</h2>
                        <div><Cuota id={socio?.nrosocio} /></div>
                </div>

                
            </div>
            } 
    
         </div>
        
    
    )
}

