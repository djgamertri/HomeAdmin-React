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
    <form className='content-delete' onSubmit={handleSubmit}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Seguro que quiere Eiminar el usuario {UserData.NameUser}?</p>
      <button className='confirm btns'>Eliminar</button>
    </form>
  )
}

export default Delete
