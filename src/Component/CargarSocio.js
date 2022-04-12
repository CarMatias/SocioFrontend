import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/CargarSocio.css'
import SuccesUpload from './SuccesUpload'
export default function Cargar(){
    const [num, setNum] =useState()
    const [form, setForm] = useState({

    })
    const handleSubmit = async (e)=>{
        e.preventDefault()


       const f = new FormData(document.getElementById('form'))       
     
         const url = 'https://localhost:5001/api/Socio'
         console.log(e)
         let config= {
            method: 'POST',
            body: f
        }
        const response = await fetch(url, config)  
        const num1 = (await response).status
        setNum(num1)

      }


  
    
    return(
        <div className="divf">
            <form className="fcs" onSubmit={handleSubmit} id='form'>
                <label className="pfc">Nombre</label>
                    <input name="nombre" className="fics"></input>
                <label className="pfc">Apellido</label>
                    <input  name="apellido" className="fics"></input>
                <label className="pfc">Dni</label>
                    <input name="dni" type='number' className="fics"></input>
                <label className="pfc">Telefono</label>
                <div className="dirf"><label className="pfc1">(+54) 297</label>
                    <input name="telefono" type='number' className="fics1"  ></input></div>
                <label className="pfc">Direccion</label>
                    <input name="direccion"  className="fics"></input>
                <label className="pfc">Foto</label>
                    <input name="imageFile" type="file" className="fics"></input>
                <button className="buttonG" type="submit">Cargar Socio </button>
                {num < 300 ? window.alert('Socio Agregado Correctamente!') : null}
            </form>
            <img id='img'></img>
        </div>
    )
}