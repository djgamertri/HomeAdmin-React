import Excel from '../Component/Excel/excel'
import Table from '../Component/Table/Table'

function Fee () {
  const headersTable = ['ID', 'Usuario', 'Estado', 'Fecha', 'Hora']
  const dataTable = [['1', 'Alguien 2', 'Activo', '12/10/2023', '12:50'], ['2', 'Alguien 2', 'Activo', '12/10/2023', '12:50'], ['3', 'Alguien 2', 'Activo', '12/10/2023', '12:50'], ['4', 'Alguien 2', 'Activo', '12/10/2023', '12:50']]

  return (
    <div>
      <Excel />
      <Table title='Residentes' headers={headersTable} data={dataTable} />
    </div>
  )
}

export default Fee
