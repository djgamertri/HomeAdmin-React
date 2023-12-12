import SideBar from '../Component/SideBar/sideBar'
import { useEffect, useState } from 'react'
import { getCommonAreas } from '../api/zone.js'
import Modal from '../Component/Modal/modal'
import NewCommonArea from '../Form/Zone/NewCommonArea.jsx'
import DeleteCommonArea from '../Form/Zone/DeleteCommonArea.jsx'
import UpdateCommonArea from '../Form/Zone/UpdateCommonArea.jsx'
import Table from '../Component/Table/Table.jsx'

function Zone () {
  const [Zone, setZone] = useState([])
  const [IdZone, setIdZone] = useState(null)
  const [Actualizar, setActualizar] = useState(false)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false)
  const [RegisterModal, setRegisterModal] = useState(false)

  useEffect(() => {
    datatable()
  }, [])

  const datatable = () => {
    getCommonAreas().then((response) => {
      console.log(response.data)
      setZone(response.data)
    }).catch((error) => {
      console.error('Error al obtener zona comun:', error)
    }).finally(
      setActualizar(false)
    )
  }

  if (Actualizar) {
    datatable()
  }

  const Columns = [
    {
      name: 'ID',
      selector: (row) => row.IdCommonArea,
      sortable: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.NameCommonArea,
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-update' onClick={(e) => handleEdit(e, row.IdCommonArea)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-delete' onClick={(e) => handleDelete(e, row.IdCommonArea)}>
          Eliminar
        </a>
      )
    }
  ]

  const handleEdit = (e, id) => {
    setIdZone(id)
    setUpdateModal(true)
  }

  const handleDelete = (e, id) => {
    setIdZone(id)
    setDeleteModal(true)
  }

  return (
    <SideBar>
      <Table
        Coluums={Columns}
        Data={Zone}
        title='Zonas Comúnes'
        buttonRegister={() => setRegisterModal(true)}
      />
      <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Zona Común'>
        <UpdateCommonArea id={IdZone} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={DeleteModal} closeModal={() => setDeleteModal(false)} title='Eliminar Zona Común'>
        <DeleteCommonArea id={IdZone} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={RegisterModal} closeModal={() => setRegisterModal(false)} title='Registrar Zona Común'>
        <NewCommonArea actualizar={setActualizar} />
      </Modal>
    </SideBar>
  )
}

export default Zone
