import { NavLink } from 'react-router-dom'
import "./Nav.css"
 
function sideBar() {
  return (
    <div className="navegation">
      <ul>
        <li>
          <a href="">
            <span className="icon">
              <i className="fa-brands fa-reddit"></i>
            </span>
            <span className="title">Cafam II</span>
          </a>
        </li>
        <li>
          <NavLink to={"/Dashboard"}>
            <span className="icon">
              <i className="fa-solid fa-house-chimney"></i>
            </span>
            <span className="title">Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Resident"}>
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="title">Residentes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Tax"}>
            <span className="icon">
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
            <span className="title">Cuotas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Votacion"}>
            <span className="icon">
              <i className="fa-solid fa-comment"></i>
            </span>
            <span className="title">Votaciones</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Parking"}>
            <span className="icon">
              <i className="fa-solid fa-car"></i>
            </span>
            <span className="title">Parqueadero</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Zone"}>
            <span className="icon">
              <i className="fa-solid fa-users"></i>
            </span>
            <span className="title">Zona Comun</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Help"}>
            <span className="icon">
              <i className="fa-solid fa-question"></i>
            </span>
            <span className="title">Ayuda</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Settings"}>
            <span className="icon">
              <i className="fa-solid fa-gear"></i>
            </span>
            <span className="title">Configuracion</span>
          </NavLink>
        </li>
        
        <li>
          <a>
            <span className="icon">
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>
            <span className="title">Salir</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default sideBar