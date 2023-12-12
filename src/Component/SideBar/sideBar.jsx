import { NavLink } from 'react-router-dom'
import './Nav.css'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'

function sideBar ({ children }) {
  const storedSidebarStatus = localStorage.getItem('sidebarStatus')
  const initialState = storedSidebarStatus ? JSON.parse(storedSidebarStatus) : false
  const [isClaseAgregar, setClaseAgregar] = useState(initialState)

  const navbar = () => {
    setClaseAgregar(!isClaseAgregar)
  }

  useEffect(() => {
    localStorage.setItem('sidebarStatus', JSON.stringify(isClaseAgregar))
  }, [isClaseAgregar])

  return (
    <>
      <div className='navegation'>
        <ul>
          <li>
            <a>
              <span className='icon'>
                <i className='fa-brands fa-reddit' />
              </span>
              <span className='title'>Cafam II</span>
            </a>
          </li>
          <li>
            <NavLink className='nav-option' to='/Dashboard'>
              <span className='icon'>
                <i className='fa-solid fa-house-chimney' />
              </span>
              <span className='title'>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Resident'>
              <span className='icon'>
                <i className='fa-solid fa-user' />
              </span>
              <span className='title'>Residentes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Tax'>
              <span className='icon'>
                <i className='fa-solid fa-dollar-sign' />
              </span>
              <span className='title'>Cuotas</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Parking'>
              <span className='icon'>
                <i className='fa-solid fa-square-parking' />
              </span>
              <span className='title'>Parqueadero</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Vehicle'>
              <span className='icon'>
                <i className='fa-solid fa-car' />
              </span>
              <span className='title'>Vehiculo</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Zone'>
              <span className='icon'>
                <i className='fa-solid fa-users' />
              </span>
              <span className='title'>Zona Comun</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Help'>
              <span className='icon'>
                <i className='fa-solid fa-question' />
              </span>
              <span className='title'>Ayuda</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-option' to='/Settings'>
              <span className='icon'>
                <i className='fa-solid fa-gear' />
              </span>
              <span className='title'>Configuracion</span>
            </NavLink>
          </li>

          <li>
            <NavLink className='nav-option' to='/logout'>
              <span className='icon'>
                <i className='fa-solid fa-right-from-bracket' />
              </span>
              <span className='title'>Salir</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`main ${isClaseAgregar ? 'activate' : ''}`}>
        <Header navbar={navbar} />
        {children}
      </div>
    </>
  )
}

export default sideBar
