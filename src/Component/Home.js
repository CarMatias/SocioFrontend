import { Fragment, useEffect, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import './styles/Home.css'
import Socio from './Socio'

export default function Home(){
    const [todos, setTodos] = useState()
    const fetchAPI = async()=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON) 
    }
    const url = "https://localhost:5001/api/Socio"
    useEffect(()=>{
        fetchAPI()    
    },[])

    const [num, setNum] = useState()
    const setLocalStorage = props=>{
        try {
            setNum(props)
            window.localStorage.setItem('num', props)            
        } catch (error) {
            console.error(error)
        }
        console.log(props)
    }
    return(
        <div className="date-container">
           {!todos ? "Cargando":
            todos.map((todo)=>  
            <Link to={'/socio/'+ todo?.nrosocio} href="/socio" className="date-item" id="link" > 
                <img className="fotoPerfil" src={todo?.imageSrc} />
                <div className="date-text">
                    <a><b>Nombre: {todo?.nombre}</b></a>
                    <a><b>Apellido: {todo?.apellido}</b></a>
                </div>
            </Link>       
            )           
            }       
        </div>

    )
}