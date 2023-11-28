import { useForm } from 'react-hook-form'
import { DeleteUser } from '../../api/user.js'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Toast from '../Toast/Toast.jsx'
import './delete.css'

function Delete ({ element, updateTable, closeModal }) {
  const { handleSubmit } = useForm()
  const params = useParams()
  const navigate = useNavigate()

  const deleteUsers = async () => {
    try {
      const res = await DeleteUser(params.id)
      const msg = res.data.message
      Toast(msg)
      closeModal()
      navigate('/Resident')
      updateTable()
    } catch (err) {
      const description = err.code
      const msg = err.response.data.message
      console.log(err)
      Toast(msg, 'error', description)
    }
  }

  const sendData = (data) => {
    try {
      const res = data
      console.log(res)
      deleteUsers(res)
    } catch (err) {
      Toast('Servidor caido intente nuevamenta mas tarde', 'error')
    }
  }

  return (
    <form className='content-delete' onSubmit={handleSubmit(sendData)}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Seguro que quiere Eiminar el {element}?</p>
      <button className='confirm btns'>Eliminar</button>
      <NavLink to='/Resident' className='cancel btns' onClick={closeModal}>Cancelar</NavLink>
    </form>
  )
}

export default Delete
