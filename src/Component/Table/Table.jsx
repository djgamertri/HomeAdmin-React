import DataTable from 'react-data-table-component'
import { useLocation, NavLink } from 'react-router-dom'
import { Toaster } from 'sonner'
import './Table.css'

function Table ({ Coluums, Data, title, buttonRegister }) {
  const location = useLocation()
  const customStyles = {
    table: {
      style: {
        margin: '5px'
      }
    },
    head: {
      style: {
        fontWeight: 'Bold',
        fontSize: '15px',
        padding: '10px'
      }
    },
    pagination: {
      style: {
        width: '98%',
        margin: '20px'
      }
    },
    rows: {
      style: {
        padding: '12px',
        fontSize: '14px'
      }
    }
  }
  return (
    <div className='TableContent'>
      <DataTable
        columns={Coluums}
        data={Data}
        subHeader
        subHeaderComponent={
          <div className='header-table'>
            <h2>{title}</h2>
            {location.pathname !== '/Dashboard'
              ? (
                <div>
                  <a className='btn btn-register' onClick={buttonRegister}>
                    Añadir {title}
                  </a>
                  {location.pathname === '/Zone' && (
                    <NavLink to='/Rent' className='btn btn-register'>
                      Alquilar
                    </NavLink>
                  )}
                </div>
                )
              : null}
          </div>
          }
        pagination
        customStyles={customStyles}
      />
      <Toaster
        theme='system'
        richColors
        duration={3000}
        closeButton
        visibleToasts={1}
      />
    </div>
  )
}

export default Table
