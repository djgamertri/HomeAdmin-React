import DataTable from 'react-data-table-component'

function Resident () {
  const data = [
    {
      IdUser: 1,
      Pass: 'iijtpbp841/*',
      TypeDoc: 'DNI',
      NumDoc: 12345678,
      NameUser: 'Juan Pérez',
      BirthDate: '1990-05-15T00:00:00.000Z',
      Phone: 987654321,
      Email: 'juan.perez@example.com',
      NumHouse: 25,
      RoleUser: 'Usuario Normal',
      StatusUser: 1,
      create_at: '2023-10-17T23:53:08.000Z'
    },
    {
      IdUser: 2,
      Pass: '$irnvpe845198/',
      TypeDoc: 'Carnet de Extranjería',
      NumDoc: 87654321,
      NameUser: 'María Gómez',
      BirthDate: '1985-11-30T00:00:00.000Z',
      Phone: 987654321,
      Email: 'maria.gomez@example.com',
      NumHouse: 10,
      RoleUser: 'Administrador',
      StatusUser: 1,
      create_at: '2023-10-17T23:53:08.000Z'
    },
    {
      IdUser: 4,
      Pass: '/prtjboinmorn51965165*',
      TypeDoc: 'DNI',
      NumDoc: 98765432,
      NameUser: 'Laura Fernández',
      BirthDate: '1995-02-10T00:00:00.000Z',
      Phone: 987654321,
      Email: 'laura.fernandez@example.com',
      NumHouse: 15,
      RoleUser: 'Usuario Normal',
      StatusUser: 1,
      create_at: '2023-10-17T23:53:08.000Z'
    },
    {
      IdUser: 5,
      Pass: '123456789',
      TypeDoc: 'Cedula de cuidadania',
      NumDoc: 1026845715,
      NameUser: 'Felipe Aguilera',
      BirthDate: '2000-12-20T00:00:00.000Z',
      Phone: 325467854,
      Email: 'rhtehtryh@gmail.com',
      NumHouse: 112,
      RoleUser: 'Admin',
      StatusUser: 1,
      create_at: '2023-10-18T18:58:55.000Z'
    },
    {
      IdUser: 6,
      Pass: '123456789',
      TypeDoc: 'Cedula de cuidadania',
      NumDoc: 18794515,
      NameUser: 'Andrea Guzman',
      BirthDate: '2000-12-20T00:00:00.000Z',
      Phone: 325467854,
      Email: 'Andrea.example@gmail.com',
      NumHouse: 130,
      RoleUser: 'Administrador',
      StatusUser: 1,
      create_at: '2023-10-18T19:00:21.000Z'
    }
  ]
  const Coluuns = [
    {
      name: 'ID',
      selector: 'IdUser',
      sortable: true
    },
    {
      name: 'Nombre',
      selector: 'NameUser',
      sortable: true
    },
    {
      name: 'Correo',
      selector: 'Email',
      sortable: true
    },
    {
      name: 'Casa',
      selector: 'NumHouse',
      sortable: true
    },
    // Los dos siguientes son los botones de acciones, lo que hace es recorre todas las filas y añadir el boton
    {
      name: 'Modificar',
      button: true,
      cell: (row) => (
        <a className='btn' onClick={(e) => handleEdit(e, row.IdUser)}>
          Editar
        </a>
      )
    },
    {
      name: 'Eliminar',
      button: true,
      cell: (row) => (
        <a className='btn' onClick={(e) => handleDelete(e, row.IdUser)}>
          Eliminar
        </a>
      )
    }
  ]

  // aqui es donde debe poner la logica de lo que pasara al dar click en editar

  const handleEdit = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }

  // aqui es donde debe poner la logica de lo que pasara al dar click en eliminar

  const handleDelete = (e, id) => {
    e.preventDefault()
    console.log('Row Id', id)
  }
  return
    <div className='TableContent'>
      <DataTable columns={Coluuns} data={data} title='Residents' fixedHeader pagination />
    </div>
  )
}

export default Resident
