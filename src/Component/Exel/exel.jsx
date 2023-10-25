import './exel.css'

function Exel ({ title }) {
  return (
    <div className='header'>
      <div className='left'>
        <ul class='breadcrumb'>
          <li>
            <a href='#'> Bienvenido </a>
          </li>
          <p>/</p>
          <li>
            <p className='activate'> {title} </p>
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
