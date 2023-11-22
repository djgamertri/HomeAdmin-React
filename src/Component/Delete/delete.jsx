import { useForm } from 'react-hook-form'
import { DeleteUser } from '../../api/user.js'
import './delete.css'
import { useParams } from 'react-router-dom'

function Delete ({ element }) {
  const { handleSubmit } = useForm()
  const params = useParams()
  const deleteUsers = async (data) => {
    try {
      const res = await DeleteUser(params.id)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const sendData = (data) => {
    try {
      const res = data
      console.log(res)
      deleteUsers(res)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='content-delete' onSubmit={handleSubmit(sendData)}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Seguro que quiere Eiminar el {element}?</p>
      <button className='confirm btns'>Eliminar</button>
      <a className='cancel btns'>Cancelar</a>
    </form>
  )
}

export default Delete
