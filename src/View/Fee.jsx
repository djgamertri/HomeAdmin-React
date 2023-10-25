import { GetFees } from '../api/Fee'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'


function Fee () {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    GetFees()
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
      selector: (row) => row.IdPayAdmin,
      sortable: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.NameUser,
      sortable: true
    },
    {
      name: 'Casa',
      selector: (row) => row.NumHouse,
      sortable: true
    },
    {
      name: 'Estado Pago',
      selector: (row) => row.StatusPayAdmin === 1 ? 'Activo' : 'Pendiente',
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

  const customStyles = {
    head: {
      style: {
        fontWeight: 'Bold',
        fontSize: '15px'
      }
    }
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }
  return (
    <div className='TableContent'>
      <DataTable columns={Coluuns} data={Users} title='Cuotas' pagination customStyles={customStyles} />
    <div>
  )
}

export default Fee
