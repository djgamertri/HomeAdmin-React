import { useForm } from 'react-hook-form'
import { DeleteUser } from '../../api/user.js'
import './delete.css'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'

function Delete ({ element, updateTable, closeModal }) {
  const [sendDataForm, setSendDataForm] = useState(false)
  const { handleSubmit } = useForm()
  const params = useParams()

  const deleteUsers = async () => {
    try {
      const res = await DeleteUser(params.id)
      const msg = res.data.message
      toast.success(msg, {
        style: {
          background: 'var(--green)',
          color: 'var(--white)',
          border: 'none'
        },
        duration: 3000
      })
      updateTable()
      setSendDataForm(true)
    } catch (err) {
      const descriptionMsg = err.code
      const msg = err.response.data.message
      console.log(err)
      toast.error(`Error ${msg}`, {
        style: {
          background: 'var(--red-hover)',
          color: 'var(--white)',
          border: 'none'
        },
        description: descriptionMsg,
        duration: 3000
      })
    }
  }

  const sendData = (data) => {
    try {
      const res = data
      console.log(res)
      deleteUsers(res)
    } catch (err) {
      toast.error('Servidor caido intente nuevamenta mas tarde', {
        style: {
          background: 'var(--red-hover)',
          color: 'var(--white)',
          border: 'none'
        },
        duration: 3000
      })
    }
  }

  // Cierra el modal después de enviar el formulario
  useEffect(() => {
    if (sendDataForm) {
      closeModal()
    }
  }, [])

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
