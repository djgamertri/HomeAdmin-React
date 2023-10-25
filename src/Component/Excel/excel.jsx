import './excel.css'

function Exel () {
  return (
    <div className='header'>
      <div className='left'>
        <ul className='breadcrumb'>
          <li>
            <a href='#'> Bienvenido </a>
          </li> /
          <li>
            <p className='nameuser'> user </p>
          </li>
        </ul>
      </div>
      <a href='#' className='report'>
        <i className='fa-solid fa-download' /> <span>Exportar Exel</span>
      </a>
    </div>
  )
}

export default Exel
