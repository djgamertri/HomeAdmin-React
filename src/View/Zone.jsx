import SideBar from '../Component/SideBar/sideBar'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'
import { getCommonAreas } from '../api/zone.js'
import { GetRentPending, GetRentAccepted } from '../api/rent.js'
import Modal from '../Component/Modal/modal'
import NewCommonArea from '../Form/Zone/NewCommonArea.jsx'
import DeleteCommonArea from '../Form/Zone/DeleteCommonArea.jsx'
import UpdateCommonArea from '../Form/Zone/UpdateCommonArea.jsx'
import RegisterRent from '../Form/Rent/RegisterRent.jsx'
import Update from '../Form/Rent/Update.jsx'
import DropRent from '../Form/Rent/DropRent.jsx'
import { format } from 'date-fns'

function Zone () {
  const [Zone, setZone] = useState([])
  const [RentPending, setRentPending] = useState([])
  const [RentAccepted, setRentAccepted] = useState([])
  const [IdZone, setIdZone] = useState(null)
  const [Actualizar, setActualizar] = useState(false)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false)
  const [RegisterModal, setRegisterModal] = useState(false)
  const [RegistRent, setRegistRent] = useState(false)
  const [DeletepRent, setDeletepRent] = useState(false)
  const [UpdateRent, setUpdateRent] = useState(false)
  const [IdRent, setIdRent] = useState(null)

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
      name: 'Id Solicitud',
      selector: (row) => row.IdRent,
      sortable: true
    },
    {
      name: 'Nombre Residente',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Zona a Alquilar',
      selector: (row) => row.NameCommonArea,
      sortable: true
    },
    {
      name: 'Fecha de uso',
      selector: (row) => format(new Date(row.RentDate), 'dd/MM/yyyy')
    },
    {
      name: 'Actualizar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleUpdateRent(e, row.IdRent)}>
          Actualizar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDeleteRent(e, row.IdRent)}>
          Eliminar
        </a>
      )
    }
  ]
  const Accepted = [
    {
      name: 'Id Solicitud',
      selector: (row) => row.IdRent,
      sortable: true
    },
    {
      name: 'Nombre Residente',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Zona a Alquilar',
      selector: (row) => row.NameCommonArea,
      sortable: true
    },
    {
      name: 'Fecha de uso',
      selector: (row) => format(new Date(row.RentDate), 'dd/MM/yyyy')
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDeleteRent(e, row.IdRent)}>
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
    setIdZone(id)
    setUpdateModal(true)
  }

  const handleDelete = (e, id) => {
    setIdZone(id)
    setDeleteModal(true)
  }

  const handleDeleteRent = (e, id) => {
    setIdRent(id)
    setDeletepRent(true)
  }
  const handleUpdateRent = (e, id) => {
    setIdRent(id)
    setUpdateRent(true)
  }
  return (
    <SideBar>
      <div className='TableContent'>
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
          subHeader
          subHeaderComponent={
            <div className='header-table'>
              <h2>Alquiler</h2>
              {
                location.pathname !== '/Dashboard'
                  ? (
                    <a className='btn btn-register' onClick={() => setRegistRent(true)}>
                      Añadir Solicitud
                    </a>
                    )
                  : null
              }
            </div>
          }
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

        <Modal isOpen={RegistRent} closeModal={() => setRegistRent(false)} title='Registrar Alquiler'>
          <RegisterRent registrar={setActualizar} />
        </Modal>

        <Modal isOpen={UpdateRent} closeModal={() => setUpdateRent(false)} title='Actualizar Solicitud'>
          <Update id={IdRent} actualizar={setActualizar} />
        </Modal>

        <Modal isOpen={DeletepRent} closeModal={() => setDeletepRent(false)} title='Eliminar Solicitud'>
          <DropRent id={IdRent} eliminar={setActualizar} />
        </Modal>
      </div>
    </SideBar>
  )
}

export default Zone
