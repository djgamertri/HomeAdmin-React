import './Header.css'

function Header () {
  return (
    <div className='topbar'>
      <div className='toggle'>
        <i className='fa-solid fa-bars' />
      </div>
      <div className='search'>
        <label>
          <input type='text' placeholder='Escriba aquí' id='searchInput' />
          <i className='fa-solid fa-magnifying-glass' />
        </label>
      </div>
      <div className='user'>
        <img src='https://raw.githubusercontent.com/djgamertri/HomeAdmin-React/b07cecd5cc220e97d9f57c3a7614468269939bbf/src/assets/user.jpg' alt='' />
      </div>
    </div>
  )
}

export default Header
