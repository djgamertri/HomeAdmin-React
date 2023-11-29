import { useForm } from 'react-hook-form'
import { Register } from '../../api/auth.js'
import { toast } from 'sonner'

function RegisterUser ({ actualizar }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const signin = async (user) => {
    try {
      const res = await Register(user)
      console.log(res)
      toast.success(res.data.NameUser + ' registrado correctamente')
      actualizar(true)
    } catch (err) {
      console.error(err.response.data)
      toast.error(err.response.data.message)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    signin(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <div className='form-colums'>
        <div className='colum'>
          <input
            className='form-input' type='text' placeholder='Nombre' {...register('NameUser', {
              required: {
                value: true,
                message: 'Nombre requerdio'
              }
            })}
          />
          {errors.NameUser && <span className='errors'>{errors.NameUser.message}</span>}
          <input
            className='form-input' type='date' placeholder='fecha de nacimiento' {...register('BirthDate', {
              required: {
                value: true,
                message: 'Fecha de nacimiento requerida'
              }
            })}
          />
          {errors.BirthDate && <span className='errors'>{errors.BirthDate.message}</span>}
          <select
            className='form-input' {...register('TypeDoc', {
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
          {errors.TypeDoc && <span className='errors'>{errors.TypeDoc.message}</span>}
          <input
            className='form-input' type='number' placeholder='Numero de documento' {...register('NumDoc', {
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
          {errors.NumDoc && <span className='errors'>{errors.NumDoc.message}</span>}
        </div>
        <div className='colum'>
          <input
            className='form-input' type='text' placeholder='Correo electronico' {...register('Email', {
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
          {errors.Email && <span className='errors'>{errors.Email.message}</span>}
          <input
            className='form-input' type='number' placeholder='Numero de casa' {...register('NumHouse', {
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
          {errors.NumHouse && <span className='errors'>{errors.NumHouse.message}</span>}
          <select
            className='form-input' {...register('RoleUser', {
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
          {errors.RoleUser && <span className='errors'>{errors.RoleUser.message}</span>}
          <select className='form-input hidden-input' {...register('StatusUser')} defaultValue={1}>
            <option value='' className='form-option'>Estado</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
          {errors.StatusUser && <span className='errors'>{errors.StatusUser.message}</span>}
          <input
            className='form-input' type='number' placeholder='Telefono' {...register('Phone', {
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
          {errors.Phone && <span className='errors'>{errors.Phone.message}</span>}
        </div>
      </div>
      <input
        className='form-input input-pass' type='password' placeholder='Contraseña' {...register('Pass', {
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
      {errors.Pass && <span className='errors errors-pass'>{errors.Pass.message}</span>}
      <button className='btn-submit' type='submit'>Registrar Usuario</button>
    </form>
  )
}

export default RegisterUser
