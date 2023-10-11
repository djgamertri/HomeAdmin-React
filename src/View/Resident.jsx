import Table from "../Component/Table/Table"

function Resident() {
  return (
    <div>
      <Table title="Residentes" headers={["Numero de Documento", "Numero de Documento", "Telefono", "Casa", "Estado", "Modificar", "Eliminar"]} data={[]}/>
    </div>
  )
}

export default Resident