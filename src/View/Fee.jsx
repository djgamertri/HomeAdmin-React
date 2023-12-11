import { GetFees } from '../api/Fee'
import { jsPDF } from 'jspdf'
import { useEffect, useState } from 'react'
import SideBar from '../Component/SideBar/sideBar'
import Table from '../Component/Table/Table.jsx'
import Modal from '../Component/Modal/modal.jsx'
import UpdateFee from '../Form/Fee/UpdateFee.jsx'
import RegisterFee from '../Form/Fee/RegisterFee.jsx'
import Pdf from '../Component/PdfExcel/PdfExcel.jsx'
import 'jspdf-autotable'

function Fee () {
  const [Fees, setFee] = useState([])
  const [IdFee, setIdFee] = useState(null)
  const [Actualizar, setActualizar] = useState(false)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [RegisterModal, setRegisterModa] = useState(false)

  useEffect(() => {
    dataTable()
  }, [])

  const dataTable = () => {
    GetFees()
      .then(response => {
        setFee(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener Pagos:', error)
      })
      .finally(
        setActualizar(false)
      )
  }

  if (Actualizar) {
    dataTable()
  }

  const feeColumns = [
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
      name: 'Numero de documento',
      selector: (row) => row.NumDoc,
      sortable: true
    },
    {
      name: 'Casa',
      selector: (row) => row.NumHouse,
      sortable: true
    },
    {
      name: 'Telefono',
      selector: (row) => row.Phone,
      sortable: true
    },
    {
      name: 'Correo ',
      selector: (row) => row.Email,
      sortable: true
    },
    {
      name: 'Estado Pago',
      selector: (row) => row.StatusPayAdmin,
      sortable: true,
      cell: (row) => (
        <div className={`cell-status ${row.StatusPayAdmin ? 'up-date' : 'pending'}`}>
          {row.StatusPayAdmin ? 'Al día' : 'Pendiente'}
        </div>
      )
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
    setIdFee(id)
    setUpdateModal(true)
  }

  const generatePdf = () => {
    const doc = new jsPDF()

    // Titulo Pdf
    doc.text('Pagos', 95, 20)

    const columnsPdf = ['Id', 'Nombre', 'Numero de documento', 'Casa', 'Telefono', 'Correo', 'Estado Pago']
    const dataPdf = Fees.map(fee => [
      fee.IdPayAdmin,
      fee.NameUser,
      fee.NumDoc,
      fee.NumHouse,
      fee.Phone,
      fee.Email,
      fee.StatusPayAdmin ? 'Al día' : 'Pendiente'
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
    doc.save('Reporte_Pagos.pdf')
  }

  return (
    <SideBar>
      <Pdf generatePdf={generatePdf} />
      <Table
        title='Pagos'
        Coluums={feeColumns}
        Data={Fees}
        buttonRegister={() => setRegisterModa(true)}
      />
      <Modal isOpen={UpdateModal} closeModal={() => setUpdateModal(false)} title='Actualizar Pago'>
        <UpdateFee id={IdFee} actualizar={setActualizar} />
      </Modal>
      <Modal isOpen={RegisterModal} closeModal={() => setRegisterModa(false)} title='Registrar Pago'>
        <RegisterFee actualizar={setActualizar} />
      </Modal>
    </SideBar>
  )
}

export default Fee
