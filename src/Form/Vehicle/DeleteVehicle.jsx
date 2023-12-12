import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { deleteVehicle, getVehicle } from '../../api/Vehicles'

function DeleteVehicle ({ id, actualizar }) {
  const [data, setData] = useState({})
  useEffect(() => {
    getVehicle(id)
      .then((response) => {
        console.log(response.data[0])
        setData(response.data[0])
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    deleteVehicle(id)
      .then((response) => {
        toast.success('vehiculo con la placa ' + response.data.Plate + ' eliminado correctamente')
        actualizar(true)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }

  return (
    <form className='content-delete' onSubmit={handleSubmit}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Esta seguro de eliminar el vehículo con la placa {data.Plate}?</p>
      <button className='confirm btns'>Eliminar</button>
    </form>
  )
}

export default DeleteVehicle
