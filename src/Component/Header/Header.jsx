import './Header.css'
import { NavLink } from 'react-router-dom'

function Header ({ navbar }) {
  return (
    <div className='topbar'>
      <div className='toggle' onClick={navbar}>
        <i className='fa-solid fa-bars' />
      </div>
      <NavLink className='user' to='/Settings'>
        <img src='https://raw.githubusercontent.com/djgamertri/HomeAdmin-React/b07cecd5cc220e97d9f57c3a7614468269939bbf/src/assets/user.jpg' alt='' />
      </NavLink>
    </div>
  )
}

export default Header
