import Card from '../Component/Card/Card'
import Table from '../Component/Table/Table'

function Dashboard () {
  const headersTable = ['Numero de Documento', 'Nombre', 'Telefono', 'Casa', 'Estado']
  const dataTable = [['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo'], ['1029141700', 'Alguien 2', '1308390313', '321', 'Activo']]

  return (
    <div>
      <div className='content-cards'>
        <Card Title='Residentes' Info='Residente Registrado' Icon='fa-solid fa-user' />
        <Card Title='Cuotas' Info='Cuotas Finas' Icon='fa-solid fa-dollar-sign  ' />
        <Card Title='Votaciones' Info='Votaciones Hechas' Icon='fa-solid fa-comment' />
        <Card Title='Casas' Info='Casas Totales' Icon='fa-solid fa-house' />
      </div>
      <Table title='Residentes' headers={headersTable} data={dataTable} />
    </div>
  )
}

export default Dashboard
