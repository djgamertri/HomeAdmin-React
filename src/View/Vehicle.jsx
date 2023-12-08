import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal.jsx'
import SideBar from '../Component/SideBar/sideBar.jsx'
import NewVehicle from '../Form/Vehicle/NewVehicle.jsx'
import DeleteVehicle from '../Form/Vehicle/DeleteVehicle.jsx'
import UpdateVehicle from '../Form/Vehicle/UpdateVehicle.jsx'

import 'jspdf-autotable'
import Table from '../Component/Table/Table.jsx'
import { getVehicles } from '../api/Vehicles.js'
function vehicle () {
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
    getVehicles()
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

  const userColumns = [
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
      name: 'Placa',
      selector: (row) => row.Plate,
      sortable: true
    },
    {
      name: 'Tipo de Vehiculo',
      selector: (row) => row.TypeVehicle,
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-update' onClick={(e) => handleEdit(e, row.Plate)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-delete' onClick={(e) => handleDelete(e, row.Plate)}>
          Eliminar
        </a>
      )
    }
  ]

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
      <Table
        title='Vehiculo'
        Coluums={userColumns}
        Data={Users}
        buttonRegister={() => setRegisterModal(true)}
      />
      <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Vehiculo'>
        <UpdateVehicle id={IdUser} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={DeleteModal} closeModal={() => setDeleteModal(false)} title='Eliminar Vehiculo'>
        <DeleteVehicle id={IdUser} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={RegisterModal} closeModal={() => setRegisterModal(false)} title='Registrar Vehiculo'>
        <NewVehicle actualizar={setActualizar} />
      </Modal>
    </SideBar>
  )
}

export default vehicle
