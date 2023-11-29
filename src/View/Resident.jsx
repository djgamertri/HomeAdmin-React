import { GetUser } from '../api/users'
import { useEffect, useState } from 'react'
import { jsPDF } from 'jspdf'
import Modal from '../Component/Modal/modal'
import UpdateUser from '../Form/User/Update'
import SideBar from '../Component/SideBar/sideBar'
import Delete from '../Form/User/Delete'
import RegisterUser from '../Form/User/Register'
import Pdf from '../Component/PdfExcel/PdfExcel.jsx'
import { format } from 'date-fns'
import 'jspdf-autotable'
import Table from '../Component/Table/Table.jsx'

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

  const userColumns = [
    {
      name: 'ID',
      selector: (row) => row.IdUser,
      sortable: true
    },
    {
      name: 'Tipo Documento',
      selector: (row) => row.TypeDoc,
      sortable: true
    },
    {
      name: 'Numero Documento',
      selector: (row) => row.NumDoc,
      sortable: true
    },
    {
      name: 'Telefono',
      selector: (row) => row.Phone,
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
      name: 'Fecha de Nacimiento',
      selector: (row) => format(new Date(row.BirthDate), 'dd/MM/yyyy'),
      sortable: true
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-update' onClick={(e) => handleEdit(e, row.IdUser)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn btn-delete' onClick={(e) => handleDelete(e, row.IdUser)}>
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

  // Funcion para Generar reportes
  const generatePdf = () => {
    const doc = new jsPDF()

    // Titulo Pdf
    doc.text('Usuarios', 95, 20)

    const columnsPdf = ['Id', 'Tipo Documento', 'Numero Documento', 'Telefono', 'Nombre', 'Correo', 'Casa', 'Fecha de Nacimiento']
    // Se recorre Users para llenar el Pdf
    const dataPdf = Users.map(user => [
      user.IdUser,
      user.TypeDoc,
      user.NumDoc,
      user.Phone,
      user.NameUser,
      user.Email,
      user.NumHouse,
      format(new Date(user.BirthDate), 'dd/MM/yyyy')
    ])

    // Filtrar las columnas que se van a mostrar segun el columnsPdf
    const filterDataPdf = dataPdf.map(row =>
      row.filter((_, index) => columnsPdf.includes(columnsPdf[index]))
    )

    doc.autoTable({
      startY: 30,
      head: [columnsPdf],
      body: filterDataPdf
    })
    // Guardar el Pdf
    doc.save('Reporte_Usuarios.pdf')
  }

  return (
    <SideBar>
      <Pdf generatePdf={generatePdf} />
      <Table
        title='Usuario'
        Coluums={userColumns}
        Data={Users}
        buttonRegister={() => setRegisterModal(true)}
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
    </SideBar>
  )
}

export default Resident
