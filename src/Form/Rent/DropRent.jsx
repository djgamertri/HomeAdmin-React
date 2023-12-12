import { useEffect, useState } from 'react'
import { GetRent, DeleteRent } from '../../api/rent.js'
import { toast } from 'sonner'

function DropRent ({ id, actualizar }) {
  const [data, setData] = useState({})

  useEffect(() => {
    GetRent(id)
      .then((response) => {
        console.log(response.data[0])
        setData(response.data[0])
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    DeleteRent(id)
      .then((response) => {
        console.log(response)
        toast.success(`Solicitud ${data.IdRent} eliminada correctamente`)
        actualizar(true)
      }).catch((error) => {
        console.log(error.response.data)
      })
  }
  console.log(data)
  return (
    <form className='content-delete' onSubmit={handleSubmit}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Seguro que quiere Eiminar la solicitud de {data.NameUser}?</p>
      <button className='confirm btns' type='submit'>Eliminar</button>
    </form>
  )
}

export default DropRent
