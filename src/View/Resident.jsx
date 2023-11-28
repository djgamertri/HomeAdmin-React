import DataTable from 'react-data-table-component'
import { GetUser } from '../api/users'
import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal'
import UpdateUser from '../Form/User/Update'
import SideBar from '../Component/SideBar/sideBar'
import Delete from '../Form/User/Delete'
import RegisterUser from '../Form/User/Register'

function Resident () {
  const [Users, setUsers] = useState([])
  const [IdUser, setIdUser] = useState(null)
  const [Actualizar, setActualizar] = useState(false)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false)
  const [RegisterModal, setRegisterModal] = useState(false)

  useEffect(() => {
    datatable()
  }, [])

  const datatable = () => {
    GetUser()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
      .finally(
        setActualizar(false)
      )
  }

  if (Actualizar) {
    datatable()
  }

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
        <a className='btn' onClick={(e) => handleEdit(e, row.IdUser)}>
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
    setIdUser(id)
    setUpdateModal(true)
  }

  const handleDelete = (e, id) => {
    setIdUser(id)
    setDeleteModal(true)
  }
  return (
    <SideBar>
      <div className='TableContent'>
        <DataTable
          columns={Coluuns} data={Users} title='Residents' pagination customStyles={customStyles}
          subHeader
          subHeaderComponent={
            <div className='header-table'>
              <h2>Usuarios</h2>
              {location.pathname !== '/Dashboard'
                ? (
                  <a className='btn btn-register' onClick={() => setRegisterModal(true)}>
                    Añadir Usuarios
                  </a>
                  )
                : null}
            </div>
          }
        />
        <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Usuario'>
          <UpdateUser id={IdUser} actualizar={setActualizar} />
        </Modal>
        <Modal isOpen={DeleteModal} closeModal={() => setDeleteModal(false)} title='Eliminar Usuario'>
          <Delete id={IdUser} actualizar={setActualizar} />
        </Modal>
        <Modal isOpen={RegisterModal} closeModal={() => setRegisterModal(false)} title='Registrar Usuario'>
          <RegisterUser actualizar={setActualizar} />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Resident
