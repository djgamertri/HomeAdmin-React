import { GetFees } from '../api/Fee'
import { useEffect, useState } from 'react'
import SideBar from '../Component/SideBar/sideBar'
import Table from '../Component/Table/Table'

import Modal from '../Component/Modal/modal'
import UpdateFee from '../Form/Fee/UpdateFee'
import RegisterFee from '../Form/Fee/RegisterFee'

function Fee () {
  const [Users, setUsers] = useState([])
  const [IdFee, setIdFee] = useState(null)
  const [Actualizar, setActualizar] = useState(false)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [RegisterModal, setRegisterModal] = useState(false)

  useEffect(() => {
    datatable()
  }, [])

  const datatable = () => {
    GetFees()
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
        <a className='btn btn-update' onClick={(e) => handleEdit(e, row.IdPayAdmin)}>
          Editar
        </a>
      )
    }
  ]

  const handleEdit = (e, id) => {
    setUpdateModal(true)
    setIdFee(id)
  }

  return (
    <SideBar>
      <div className='TableContent'>
        <Table
          title='Cuotas'
          Coluums={Coluuns}
          Data={Users}
          buttonRegister={() => setRegisterModal(true)}
        />
      </div>
      <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Couta'>
        <UpdateFee id={IdFee} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={RegisterModal} closeModal={() => setRegisterModal(false)} title='Registrar Couta'>
        <RegisterFee actualizar={setActualizar} />
      </Modal>
    </SideBar>
  )
}

export default Fee
