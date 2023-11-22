import DataTable from 'react-data-table-component'
import { GetUser } from '../api/users'
import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal'
import UpdateUser from '../Form/User/Update'
import SideBar from '../Component/SideBar/sideBar'

function Resident () {
  const [Users, setUsers] = useState([])
  const [UpdateModal, setUpdateModal] = useState(false)

  useEffect(() => {
    GetUser()
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
      selector: (row) => row.IdUser,
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
        <a className='btn' onClick={() => setUpdateModal(true)}>
          Editar
        </a> // Simple prueba de que el modal funciona
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDelete(e, row.IdUser)}>
          Eliminar
        </a>
      )
    }
  ]

  const customStyles = {
    head: {
      style: {
        fontWeight: 'Bold',
        fontSize: '15px'
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
  return (
    <SideBar>
      <div className='TableContent'>
        <DataTable columns={Coluuns} data={Users} title='Residents' pagination customStyles={customStyles} />
        <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Usuario'>
          <UpdateUser />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Resident
