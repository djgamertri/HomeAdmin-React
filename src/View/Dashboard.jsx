import SideBar from '../Component/SideBar/sideBar'
import Card from '../Component/Card/Card'
import { GetUser } from '../api/users.js'
import { GetFees } from '../api/Fee.js'
import { getVehicles } from '../api/Vehicles.js'
import { useEffect, useState } from 'react'
import Table from '../Component/Table/Table.jsx'
import { format } from 'date-fns'

function Dashboard () {
  const [Users, setUsers] = useState([])
  const [Fees, setFees] = useState([])
  const [Vehicles, setVehicles] = useState([])

  useEffect(() => {
    GetUser()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
    GetFees()
      .then(response => {
        setFees(response.data)
      })
      .catch(error => {
        console.error('Error al obtener cuotas:', error)
      })
    getVehicles()
      .then(response => {
        setVehicles(response.data)
      })
      .catch(error => {
        console.error('Error al obtener vehiculos:', error)
      })
  }, [])

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
      name: 'Correo',
      selector: (row) => row.Email,
      sortable: true
    },
    {
      name: 'Fecha de Nacimiento',
      selector: (row) => format(new Date(row.BirthDate), 'dd/MM/yyyy'),
      sortable: true
    },
    {
      name: 'Casa',
      selector: (row) => row.NumHouse,
      sortable: true
    }
  ]

  // https://react-data-table-component.netlify.app/?path=/docs/api-custom-styles--page

  return (
    <SideBar>
      <div>
        <div className='content-cards'>
          <Card Title='Residentes' Info={`Residente Registrado ${Users.length}`} Icon='fa-solid fa-user' />
          <Card Title='Cuotas' Info={`Cuotas Fijas ${Fees.length}`} Icon='fa-solid fa-dollar-sign  ' />
          <Card Title='Vehiculos' Info={`Vehiculos en existencia ${Vehicles.length}`} Icon='fa-solid fa-car' />
          <Card Title='Casas' Info={`Casas Totales ${Users.length}`} Icon='fa-solid fa-house' />
        </div>
        <Table
          title='Usuario'
          Coluums={userColumns}
          Data={Users}
        />
      </div>
    </SideBar>
  )
}

export default Dashboard
