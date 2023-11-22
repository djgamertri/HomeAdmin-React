import DataTable from 'react-data-table-component'
import { GetUser } from '../api/user.js'
import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal'
import Delete from '../Component/Delete/delete'
import { NavLink, useParams } from 'react-router-dom'
import UserForm from '../Form/User/UserForm'

function Resident () {
  const [Users, setUsers] = useState([])
  const [isModalResident, setIsModalResident] = useState(false)
  const [isModalDelete, setIsModalDelete] = useState(false)

  const params = useParams()
  let titleModal = 'Registrar Usuario'

  if (params.id) {
    titleModal = 'Actualizar Usuario'
  }

  useEffect(() => {
    GetUser()
      .then(response => {
        setUsers(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  const Coluuns = [
    {
      name: 'ID',
      selector: (row) => row.IdUser,
      sortable: true
    },
    {
      name: 'Tipo Documento',
      selector: (row) => row.TypeDoc,
      sortable: true
    },
    {
      name: 'Numero Documento',
      selector: (row) => row.NumDoc,
      sortable: true
    },
    {
      name: 'Telefono',
      selector: (row) => row.Phone,
      sortable: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Correo',
      selector: (row) => row.Email,
      sortable: true
    },
    {
      name: 'Casa',
      selector: (row) => row.NumHouse,
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <NavLink to={`/Resident/${row.IdUser}`} className='btn btn-update' onClick={() => setIsModalResident(true)}>
          Editar
        </NavLink>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <NavLink to={`/Resident/${row.IdUser}`} className='btn btn-delete' onClick={() => setIsModalDelete(true)}>
          Eliminar
        </NavLink>
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

  return (
    <div className='TableContent'>
      <DataTable
        columns={Coluuns}
        data={Users}
        subHeader
        subHeaderComponent={
          <div className='header-table'>
            <h2>Usuarios</h2>
            <a className='btn btn-register' onClick={() => setIsModalResident(true)}>
              Añadir Usuario
            </a>
          </div>
          }
        pagination
        customStyles={customStyles}
      />
      <Modal isOpen={isModalResident} closeModal={() => setIsModalResident(false)} title={titleModal}>
        <UserForm />
      </Modal>
      <Modal isOpen={isModalDelete} closeModal={() => setIsModalDelete(false)} title='Eliminar Usuario'>
        <Delete element='Usuario' />
      </Modal>
    </div>
  )
}

export default Resident
