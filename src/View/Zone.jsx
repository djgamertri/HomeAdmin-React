import SideBar from '../Component/SideBar/sideBar'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'
import { getCommonAreas } from '../api/zone.js'
import { GetRentPending, GetRentAccepted } from '../api/rent.js'
import Modal from '../Component/Modal/modal'
import Card from '../Component/Card/Card'
import NewCommonArea from '../Form/Zone/NewCommonArea.jsx'
import DeleteCommonArea from '../Form/Zone/DeleteCommonArea.jsx'
import UpdateCommonArea from '../Form/Zone/UpdateCommonArea.jsx'

function Zone () {
  const [Zone, setZone] = useState([])
  const [RentPending, setRentPending] = useState([])
  const [RentAccepted, setRentAccepted] = useState([])
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
      console.error('Error al obtener usuarios:', error)
    }).finally(
      setActualizar(false)
    )
    GetRentPending().then((response) => {
      console.log(response.data)
      setRentPending(response.data)
    }).catch((error) => {
      console.log('Error al obtener Alquileres pendientes', error.response.data)
    })
    GetRentAccepted().then((response) => {
      console.log(response.data)
      setRentAccepted(response.data)
    }).catch((error) => {
      console.error('Error al obtener Alquileres aceptados', error.response.data)
    })
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
      name: 'Name',
      selector: (row) => row.NameCommonArea,
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleEdit(e, row.IdCommonArea)}>
          Editar
        </a> // Simple prueba de que el modal funciona
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
  const Pending = [
    {
      name: 'Nombre Residente',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Zona a Alquilar',
      selector: (row) => row.NameCommonArea,
      sortable: true
    }
  ]
  const Accepted = [
    {
      name: 'Nombre Residente',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Zona a Alquilar',
      selector: (row) => row.NameCommonArea,
      sortable: true
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
    setIdZone(id)
    setUpdateModal(true)
  }

  const handleDelete = (e, id) => {
    setIdZone(id)
    setDeleteModal(true)
  }
  return (
    <SideBar>
      <div className='TableContent'>
        <div className='content-cards'>
          <Card Title='Residentes' Info='Residente Registrado' Icon='fa-solid fa-user' />
          <Card Title='Cuotas' Info='Cuotas Finas' Icon='fa-solid fa-dollar-sign  ' />
          <Card Title='Votaciones' Info='Votaciones Hechas' Icon='fa-solid fa-comment' />
          <Card Title='Casas' Info='Casas Totales' Icon='fa-solid fa-house' />
        </div>
        <DataTable
          columns={Columns} data={Zone} title='Zonas Comúnes' pagination customStyles={customStyles}
          subHeader
          subHeaderComponent={
            <div className='header-table'>
              <h2>Zonas Comúnes</h2>
              {
                location.pathname !== '/Dashboard'
                  ? (
                    <a className='btn btn-register' onClick={() => setRegisterModal(true)}>
                      Añadir Zona Común
                    </a>
                    )
                  : null
              }
            </div>
          }
        />
        <br />
        <DataTable
          columns={Pending} data={RentPending} title='Solicitud de Alquileres' pagination customStyles={customStyles}
        />
        <br />
        <DataTable
          columns={Accepted} data={RentAccepted} title='Zonas Comunes Alquiladas' pagination customStyles={customStyles}
        />
        <br />
        <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Zona Común'>
          <UpdateCommonArea id={IdZone} actualizar={setActualizar} />
        </Modal>

        <Modal isOpen={DeleteModal} closeModal={() => setDeleteModal(false)} title='Eliminar Zona Común'>
          <DeleteCommonArea id={IdZone} eliminar={setActualizar} />
        </Modal>

        <Modal isOpen={RegisterModal} closeModal={() => setRegisterModal(false)} title='Registrar Zona Común'>
          <NewCommonArea registrar={setActualizar} />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Zone
