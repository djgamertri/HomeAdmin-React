import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from '../../api/auth.js'
import { GetUserById, UpdateUser } from '../../api/user.js'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

function UserForm ({ updateTable, closeModal, pass }) {
  const [sendDataForm, setSendDataForm] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  // Cambiar texto del boton dependiendo si ahi un parametro en la Url
  const submitText = params.id ? 'Actualizar Usuario' : 'Registrar Usuario'

  // Función para registrar un nuevo Usuario
  const registerUser = async (data) => {
    try {
      const res = await createUser(data)
      const msg = res.data.message
      toast.success(msg, {
        style: {
          background: 'var(--green)',
          color: 'var(--white)',
          border: 'none'
        },
        duration: 3000
      })
      setSendDataForm(true)
    } catch (err) {
      const descriptionMsg = err.code
      const msg = err.response.data.message
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

  // Función para actualizar Usuarios
  const updateUsers = async (data) => {
    try {
      const res = await UpdateUser(data)
      const msg = res.data.message
      toast.success(msg, {
        style: {
          background: 'var(--green)',
          color: 'var(--white)',
          border: 'none'
        },
        duration: 3000
      })
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

  const sendData = async (data) => {
    try {
      if (!params.id) {
        await registerUser(data)
        console.log(data)
      } else {
        await updateUsers(data)
        console.log(data)
      }
      updateTable()
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

  useEffect(() => {
    async function loadUser () {
      if (params.id) {
        const user = await GetUserById(params.id)
        const value = user.data[0]
        const date = new Date(value.BirthDate).toISOString().split('T')[0]
        setValue('Id', value.IdUser)
        setValue('Name', value.NameUser)
        setValue('Birthday', date)
        setValue('TypeDocument', value.TypeDoc)
        setValue('NumDocument', value.NumDoc)
        setValue('Phone', value.Phone)
        setValue('Email', value.Email)
        setValue('NumberHouse', value.NumHouse)
        setValue('Rol', value.RoleUser)
        setValue('Pass', value.Pass)
        setValue('State', value.StatusUser)
      }
    }
    loadUser()
  }, [])

  // Cierra el modal después de enviar el formulario
  useEffect(() => {
    if (sendDataForm) {
      closeModal()
      navigate('/Resident')
    }
  }, [sendDataForm, closeModal])

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <div className='form-colums'>
        <div className='colum'>
          <input className='form-input-colum hidden-input' type='text' placeholder='Nombre' {...register('Id')} />
          <input
            className='form-input-colum' type='text' placeholder='Nombre' {...register('Name', {
              required: {
                value: true,
                message: 'Nombre requerdio'
              }
            })}
          />
          {errors.Name && <span className='errors-column'>{errors.Name.message}</span>}
          <input
            className='form-input-colum' type='date' placeholder='fecha de nacimiento' {...register('Birthday', {
              required: {
                value: true,
                message: 'Fecha de nacimiento requerida'
              }
            })}
          />
          {errors.Birthday && <span className='errors-column'>{errors.Birthday.message}</span>}
          <select
            className='form-input-colum' {...register('TypeDocument', {
              required: {
                value: true,
                message: 'Tipo de documento requerido'
              }
            })}
          >
            <option value='' className='form-option'>Tipo de documento</option>
            <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
            <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
            <option value='Carnet de extranjeria' className='form-option'>Carnet de extranjeria</option>
            <option value='DNI' className='form-option'>DNI</option>
            <option value='Pasaporte' className='form-option'>Pasaporte</option>
            <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
          </select>
          {errors.TypeDocument && <span className='errors-column'>{errors.TypeDocument.message}</span>}
          <input
            className='form-input-colum' type='number' placeholder='Numero de documento' {...register('NumDocument', {
              required: {
                value: true,
                message: 'Numero de documento requerido'
              },
              maxLength: {
                value: 10,
                message: 'Numero de documento no valido'
              },
              max: {
                value: 4294967295,
                message: 'Numero de documento no valido'
              }
            })}
          />
          {errors.NumDocument && <span className='errors-column'>{errors.NumDocument.message}</span>}
        </div>
        <div className='colum'>
          <input
            className='form-input-colum' type='text' placeholder='Correo electronico' {...register('Email', {
              required: {
                value: true,
                message: 'Correo electronico requerido'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Formato invalido'
              }
            })}
          />
          {errors.Email && <span className='errors-column'>{errors.Email.message}</span>}
          <input
            className='form-input-colum' type='number' placeholder='Numero de casa' {...register('NumberHouse', {
              required: {
                value: true,
                message: 'Numero de casa requerido'
              },
              min: {
                value: 1,
                message: 'Numero de casa no existente'
              },
              max: {
                value: 175,
                message: 'Numero de casa no existente'
              }
            })}
          />
          {errors.NumberHouse && <span className='errors-column'>{errors.NumberHouse.message}</span>}
          <select
            className='form-input-colum' {...register('Rol', {
              required: {
                value: true,
                message: 'Rol requerido'
              }
            })}
          >
            <option value='' className='form-option'>Rol</option>
            <option value='Administrador' className='form-option'>Administrador</option>
            <option value='Residente' className='form-option'>Residente</option>
          </select>
          {errors.Rol && <span className='errors-column'>{errors.Rol.message}</span>}
          <select className='form-input-colum hidden-input' {...register('State')} defaultValue={1}>
            <option value='' className='form-option'>Estado</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
          <input
            className='form-input-colum' type='number' placeholder='Telefono' {...register('Phone', {
              required: {
                value: true,
                message: 'Numero de telefono requerido'
              },
              minLength: {
                value: 7,
                message: 'Numero no valido'
              },
              maxLength: {
                value: 10,
                message: 'Numero no valido'
              },
              max: {
                value: 4294967295,
                message: 'Numero no valido'
              }
            })}
          />
          {errors.Phone && <span className='errors-column'>{errors.Phone.message}</span>}
        </div>
      </div>
      {location.pathname === '/Resident'
        ? (
          <input
            className='form-input-colum input-pass' type='password' placeholder='Contraseña' {...register('Pass', {
              required: {
                value: true,
                message: 'Contraseña requerida'
              },
              minLength: {
                value: 8,
                message: 'contraseña de minimo 8 caracteres'
              }
            })}
          />
          )
        : null}
      {errors.Pass && <span className='errors-column errors-pass'>{errors.Pass.message}</span>}
      <button className='btn-submit' type='submit'>{submitText}</button>
    </form>
  )
}

export default UserForm
