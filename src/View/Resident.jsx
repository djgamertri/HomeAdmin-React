import Table from '../Component/Table/Table'

function Resident () {
  const headersTable = ['Numero de Documento', 'Nombre', 'Telefono', 'Casa', 'Estado']
  const dataTable = [['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo']]

  return (
    <div>
      <Table title='Residentes' headers={headersTable} data={dataTable} />
    </div>
  )
}

export default Resident
