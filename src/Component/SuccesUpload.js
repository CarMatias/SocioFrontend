import './styles/SuccesDelete.css'
import {Link} from 'react-router-dom'
import logo from './Icons/iconcheck.png'
import { useState } from 'react'
export default function SuccesUpload(){
    return(
        <div className="sod">
        <p>Socio Cargado Correctamente</p>
        <img className='check' src={logo}></img>
        <p className='sd'>Para volver al inicio haga <Link to="/home">click aqui</Link></p>
   </div>
    )
}