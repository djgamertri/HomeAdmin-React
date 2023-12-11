import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { deleteVehicle, getVehicle } from '../../api/Vehicles'

function DeleteCommonArea ({ id, actualizar }) {
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
        toast.success(response.data.Plate + ' eliminado correctamente')
        actualizar(true)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <h1>¿Estas seguro de eliminar este vehiculo?</h1>
      <p>{data.TypeVehicle}  {data.Plate} </p>
      <button className='btn-submit' type='submit'>Confirmar</button>
    </form>
  )
}

export default DeleteCommonArea
