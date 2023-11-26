import { GetUser } from '../api/user.js'
import { useEffect, useState } from 'react'
import Modal from '../Component/Modal/modal'
import Delete from '../Component/Delete/delete'
import { NavLink, useParams } from 'react-router-dom'
import UserForm from '../Form/User/UserForm'
import Table from '../Component/Table/Table.jsx'
import Pdf from '../Component/PdfExcel/PdfExcel.jsx'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import { format } from 'date-fns'

function Resident () {
  const [Users, setUsers] = useState([])
  const [isModalResident, setIsModalResident] = useState(false)
  const [isModalDelete, setIsModalDelete] = useState(false)
  const params = useParams()

  // Cambiar texto del titulo del modal dependiendo si ahi un parametro en la Url
  const titleModal = params.id ? 'Actualizar Usuario' : 'Registrar Usuario'

  // Funcion para mostrar el Usuarios
  const tableUsers = async () => {
    try {
      const res = await GetUser()
      setUsers(res.data)
      console.log(res)
    } catch (err) {
      console.log('Error al mostrar usuarios:', err)
    }
  }

  // Renderiza una vez la tabla de Usuarios
  useEffect(() => {
    tableUsers()
  }, [])

  // Función para actualizar la tabla al enviar el formulario
  function updateTable () {
    tableUsers()
  }

  // Columnas de la tabla
  const userColums = [
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
        <NavLink to={`/Resident/${row.IdUser}`} className='btn btn-update' onClick={() => setIsModalResident(true)}>
          Editar
        </NavLink>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <NavLink to={`/Resident/${row.IdUser}`} className='btn btn-delete' onClick={() => setIsModalDelete(true)}>
          Eliminar
        </NavLink>
      )
    }
  ]
  console.log(Users)
  // Funcion para Generar reportes
  const generatePdf = () => {
    console.log(userColums)
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
    <>
      <Pdf generatePdf={generatePdf} />
      <Table
        title='Usuario'
        Coluums={userColums}
        Data={Users}
        buttonRegister={() => setIsModalResident(true)}
      />
      <Modal isOpen={isModalResident} closeModal={() => setIsModalResident(false)} title={titleModal} headerModal>
        <UserForm updateTable={updateTable} closeModal={() => setIsModalResident(false)} />
      </Modal>
      <Modal isOpen={isModalDelete} closeModal={() => setIsModalDelete(false)} title='Eliminar Usuario'>
        <Delete updateTable={updateTable} closeModal={() => setIsModalDelete(false)} element='Usuario' />
      </Modal>
    </>
  )
}

export default Resident
