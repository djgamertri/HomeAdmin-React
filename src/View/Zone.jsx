import SideBar from '../Component/SideBar/sideBar'
import DataTable from 'react-data-table-component'
import { getCommonAreas } from '../api/zone.js'
import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal.jsx'
import Card from '../Component/Card/Card.jsx'
import UpdateCommonArea from '../Form/Zone/Update.jsx'
import RegisterCommonArea from '../Form/Zone/Register.jsx'

function Zone () {
  const [CommonArea, setCommonArea] = useState()
  const [UpdateModal, setUpdateModal] = useState(false)
  const [NewModal, setNewModal] = useState(false)

  useEffect(() => {
    getCommonAreas().then(response => {
      setCommonArea(response.data)
    }).catch(error => {
      console.error('Error al obtener areas comunes:', error)
    })
  }, [])
  const Columns = [
    {
      name: 'Id',
      selector: (row) => row.IdCommonArea,
      sortable: true
    },
    {
      name: 'NameCommonArea',
      selector: (row) => row.NameCommonArea,
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={() => setUpdateModal(true)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDelete(e, row.IdCommonArea)}>
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

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log('Delete Row Id', id)
  }

  return (
    <SideBar>
      <div>
        <div className='content-cards'>
          <Card Title='Residentes' Info='Residente Registrado' Icon='fa-solid fa-user' />
          <Card Title='Cuotas' Info='Cuotas Finas' Icon='fa-solid fa-dollar-sign  ' />
          <Card Title='Votaciones' Info='Votaciones Hechas' Icon='fa-solid fa-comment' />
          <Card Title='Casas' Info='Casas Totales' Icon='fa-solid fa-house' />
        </div>
      </div>
      <div className='TableContent'>
        <DataTable columns={Columns} data={CommonArea} title='Common Areas' pagination customStyles={customStyles} />
        <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Zona Comun'>
          <UpdateCommonArea />
        </Modal>
      </div>
      <br />
      <div>
        <a className='btn btn-register' onClick={() => setNewModal(true)}>
          Registrar nueva Zona Comun
        </a>
        <Modal isOpen={NewModal} closeModal={() => setNewModal(false)} title='Nueva Zona Comun'>
          <RegisterCommonArea />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Zone
