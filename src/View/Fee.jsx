import { GetFees } from '../api/fee.js'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Modal from '../Component/Modal/modal'
import FeeForm from '../Form/Fee/FeeForm'
import SideBar from '../Component/SideBar/sideBar'
import { NavLink } from 'react-router-dom'

function Fee () {
  const [Users, setUsers] = useState([])
  const [isModalFee, setIsModalFee] = useState(false)

  useEffect(() => {
    GetFees()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  const Coluuns = [
    {
      name: 'ID',
      selector: (row) => row.IdPayAdmin,
      sortable: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Casa',
      selector: (row) => row.NumHouse,
      sortable: true
    },
    {
      name: 'Estado Pago',
      selector: (row) => row.StatusPayAdmin === 1 ? 'Activo' : 'Pendiente',
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <NavLink to={`/Tax/${row.IdPayAdmin}`} className='btn btn-update' onClick={() => setIsModalFee(true)}>
          Editar
        </NavLink>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-delete' onClick={(e) => handleDelete(e, row.IdUser)}>
          Eliminar
        </a>
      )
    }
  ]

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

  const handleEdit = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  useEffect(() => {
    GetFees()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  return (
    <SideBar>
      <div className='TableContent'>
        <DataTable
          columns={Coluuns}
          data={Users}
          subHeader
          subHeaderComponent={
            <div className='header-table'>
              <h2>Cuotas</h2>
              <a className='btn btn-register' onClick={() => setIsModalFee(true)}>
                Añadir Tarifa
              </a>
            </div>
            }
          pagination
          customStyles={customStyles}
        />
        <Modal isOpen={isModalFee} closeModal={() => setIsModalFee(false)} title='Actualizar Pago'>
          <FeeForm />
        </Modal>
        <Modal isOpen={isModalFee} closeModal={() => setIsModalFee(false)} title='Registrar Pago'>
          <FeeForm />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Fee
