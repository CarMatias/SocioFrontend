import './App.css';
import {BrowserRouter , Route, Link, Routes} from 'react-router-dom'
import Home from './Component/Home'
import Cargar from './Component/CargarSocio';
import Socio from './Component/Socio'
import Gcuota from './Component/Gcuota'
import SuccesDelete from './Component/SuccesDelete';
import SuccesUpload from './Component/SuccesUpload';
import SuccesCuota from './Component/SuccesCuota'

const App = ()=>{
  return(
    <div className='ns'>
    <BrowserRouter>
      <header >
        <ul className='nav' >
          <li  >
              <Link to="/home"><a className='navLetter'>Home</a></Link>
          </li>
          <li >
              <Link to="/cargarsocio"><a className='navLetter'>Cargar Socios</a></Link>
          </li>          <li >
              <Link to="/generarcuota"><a className='navLetter'>GenerarCuota</a></Link>
          </li>
        </ul>
       </header>  
        <Routes>
        <Route path='generarcuota' element={<Gcuota />} />
        <Route path='/home'  element={<Home />} />
        <Route path='/cargarsocio' element={<Cargar />}/>
        <Route path='/socio/:id' element={<Socio />} />
        <Route path='/delete' element={<SuccesDelete />}/>
        <Route path='/carga' element={<SuccesUpload />}/>
        <Route path='/cuota' element={<SuccesCuota />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
