import DataTable from 'react-data-table-component'
import SideBar from '../Component/SideBar/sideBar'
import Card from '../Component/Card/Card'
import { GetUser } from '../api/users.js'
import { useEffect, useState } from 'react'

function Dashboard () {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    GetUser()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  const Coluuns = [
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
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleEdit(e, row.IdUser)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: 'true',
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDelete(e, row.IdUser)}>
          Eliminar
        </a>
      )
    }
  ]

  const handleEdit = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  // https://react-data-table-component.netlify.app/?path=/docs/api-custom-styles--page

  const customStyles = {
    head: {
      style: {
        fontWeight: 'Bold',
        fontSize: '15px'
      }
    }
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
        <div className='TableContent'>
          <DataTable columns={Coluuns} data={Users} fixedHeader customStyles={customStyles} />
        </div>
      </div>
    </SideBar>
  )
}

export default Dashboard
