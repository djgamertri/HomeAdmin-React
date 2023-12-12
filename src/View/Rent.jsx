import SideBar from '../Component/SideBar/sideBar'
import { useEffect, useState } from 'react'
import { GetRentPending, GetRentAccepted } from '../api/rent.js'
import Modal from '../Component/Modal/modal'
import RegisterRent from '../Form/Rent/RegisterRent.jsx'
import Update from '../Form/Rent/Update.jsx'
import DropRent from '../Form/Rent/DropRent.jsx'
import { format } from 'date-fns'
import Pdf from '../Component/PdfExcel/PdfExcel.jsx'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

import Table from '../Component/Table/Table.jsx'

function Rent () {
  const [RentPending, setRentPending] = useState([])
  const [RentAccepted, setRentAccepted] = useState([])
  const [Actualizar, setActualizar] = useState(false)
  const [RegistRent, setRegistRent] = useState(false)
  const [DeletepRent, setDeletepRent] = useState(false)
  const [UpdateRent, setUpdateRent] = useState(false)
  const [IdRent, setIdRent] = useState(null)

  useEffect(() => {
    datatable()
  }, [])

  const datatable = () => {
    GetRentPending().then((response) => {
      console.log(response.data)
      setRentPending(response.data)
    }).catch((error) => {
      console.log('Error al obtener Alquileres pendientes', error.response.data)
    }).finally(
      setActualizar(false)
    )
    GetRentAccepted().then((response) => {
      console.log(response.data)
      setRentAccepted(response.data)
    }).catch((error) => {
      console.error('Error al obtener Alquileres aceptados', error.response.data)
    }).finally(
      setActualizar(false)
    )
  }

  if (Actualizar) {
    datatable()
  }

  const Pending = [
    {
      name: 'ID',
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
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-update' onClick={(e) => handleUpdateRent(e, row.IdRent)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-delete' onClick={(e) => handleDeleteRent(e, row.IdRent)}>
          Eliminar
        </a>
      )
    }
  ]

  const Accepted = [
    {
      name: 'ID',
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

  const generatePdfPending = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF()

    // Titulo Pdf
    doc.text('Alquiler Zona Común Pendiente', 70, 20)

    const columnsPdf = ['ID', 'Nombre del Residente', 'Zona a Alquilar', 'Fecha de uso']
    const dataPdf = RentPending.map(rent => [
      rent.IdRent,
      rent.NameUser,
      rent.NameCommonArea,
      format(new Date(rent.RentDate), 'dd/MM/yyyy')
    ])

    const filterDataPdf = dataPdf.map(row =>
      row.filter((_, index) => columnsPdf.includes(columnsPdf[index]))
    )

    doc.autoTable({
      startY: 30,
      head: [columnsPdf],
      body: filterDataPdf
    })
    // Guardar el Pdf
    doc.save('Reporte_Alquiler_Zona_Común_Pendiente.pdf')
  }

  const generatePdfAccept = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF()

    // Titulo Pdf
    doc.text('Alquiler Zona Común', 80, 20)

    const columnsPdf = ['ID', 'Nombre del Residente', 'Zona a Alquilar', 'Fecha de uso']
    const dataPdf = RentAccepted.map(rent => [
      rent.IdRent,
      rent.NameUser,
      rent.NameCommonArea,
      format(new Date(rent.RentDate), 'dd/MM/yyyy')
    ])

    const filterDataPdf = dataPdf.map(row =>
      row.filter((_, index) => columnsPdf.includes(columnsPdf[index]))
    )

    doc.autoTable({
      startY: 30,
      head: [columnsPdf],
      body: filterDataPdf
    })
    // Guardar el Pdf
    doc.save('Reporte_Alquiler_Zona_Común_Accept.pdf')
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
      <Pdf generatePdf={generatePdfPending} />
      <Table
        Coluums={Pending}
        Data={RentPending}
        title='Zonas Alquilada Pent'
        buttonRegister={() => setRegistRent(true)}
      />
      <Pdf generatePdf={generatePdfAccept} />
      <Table
        Coluums={Accepted}
        Data={RentAccepted}
        title='Zona Alquilada Accept'
      />
      <Modal isOpen={RegistRent} closeModal={() => setRegistRent(false)} title='Registrar Solicitud'>
        <RegisterRent actualizar={setActualizar} />
      </Modal>

      <Modal isOpen={UpdateRent} closeModal={() => setUpdateRent(false)} title='Actualizar Solicitud'>
        <Update id={IdRent} actualizar={setActualizar} />
      </Modal>

      <Modal isOpen={DeletepRent} closeModal={() => setDeletepRent(false)} title='Eliminar Solicitud'>
        <DropRent id={IdRent} actualizar={setActualizar} />
      </Modal>
    </SideBar>
  )
}

export default Rent
