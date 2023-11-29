import { useEffect, useState } from 'react'
import { DeleteUser, GetOneUser } from '../../api/users'
import { toast } from 'sonner'

function Delete ({ id, actualizar }) {
  const [UserData, setUserData] = useState({})
  useEffect(() => {
    GetOneUser(id)
      .then(response => {
        console.log(response.data[0])
        setUserData(response.data[0])
      })
      .catch(error => {
        console.error('Error al obtener usuario:', error)
      })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    DeleteUser(id)
      .then(response => {
        console.log(response.data)
        toast.success(response.data.NameUser + ' eliminado correctamente')
        actualizar(true)
      })
      .catch(error => {
        console.error(error.response.data)
      })
  }

  return (
    <form action='#' method='post' className='form-disposition' id='update' onSubmit={handleSubmit}>
      <h1>Desea eliminar al Usuario</h1>
      <p>{UserData.TypeDoc}: {UserData.NumDoc}</p>
      <p>Nombre: {UserData.NameUser}</p>
      <p>Casa: {UserData.NumHouse}</p>
      <p>Numero Telefonico: {UserData.Phone}</p>
      <button className='btn-submit' type='submit'>Confirmar</button>
    </form>
  )
}

export default Delete
