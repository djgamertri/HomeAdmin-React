import { useForm, Controller } from 'react-hook-form'
import { PatchUser } from '../../api/users.js'
function UpdateUser () {
  const { register, handleSubmit, control, formState: { errors } } = useForm()
  const updateResident = async (data) => {
    try {
      const res = PatchUser(data)
      console.log(res.data)
    } catch (err) {
      console.error(err.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    updateResident(data)
  })
  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <div className='form-colums'>
        <div className='colum'>
          <input className='form-input' type='text' placeholder='Nombre' {...register('Name', { required: true })} />
          <input className='form-input' type='date' placeholder='fecha de nacimiento' {...register('Birthday', { required: true })} />
          <Controller
            name='TypeDocument'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'El tipo de documento es requerido'
              }
            }}
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Tipo de documento</option>
                <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
                <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
                <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
              </select>
            )}
          />
          {errors.TypeDocument && <p className='error-input'>{errors.TypeDocument.message}</p>}
          <input
            className='form-input' type='number' placeholder='Numero de documento' {...register('NumDocument', {
              required: {
                value: true,
                message: 'El numero de documento es requerido'
              },
              valueAsNumber: {
                value: true,
                message: 'El campo debe ser un numero de documento valido'
              },
              maxLength: {
                value: 11,
                message: 'El numero de documento no puede ser mayor a 11 digitos'
              }
            })}
          />
          {errors.NumDocument && <p className='error-input'>{errors.NumDocument.message}</p>}
          <input
            className='form-input' type='number' placeholder='Telefono' {...register('Phone', {
              required: {
                value: true,
                message: 'El numero de telefono es requerido'
              },
              valueAsNumber: {
                value: true,
                message: 'El campo debe ser un numero de telefono valido'
              },
              maxLength: {
                value: 10,
                message: 'El numero de telefono no puede ser mayor a 10 digitos'
              }
            })}
          />
          {errors.Phone && <p className='error-input'>{errors.Phone.message}</p>}
        </div>
        <div className='colum'>
          <input
            className='form-input' type='email' placeholder='Correo electronico' {...register('Email', {
              required: {
                value: true,
                message: 'Correo electronico Requerido'
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                message: 'Formato no valido'
              }
            })}
          />
          {errors.Email && <p className='error-input'> {errors.Email.message} </p>}
          <input className='form-input' type='number' placeholder='Numero de casa' {...register('NumberHouse', { required: true })} />
          <Controller
            name='Rol'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'El tipo de documento es requerido'
              }
            }}
            defaultValue='Residente'
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Rol</option>
                <option value='Administrador' className='form-option'>Administrador</option>
                <option value='Residente' className='form-option'>Residente</option>
              </select>
            )}
          />
          {errors.Rol && <p className='error-input'> {errors.Rol.message} </p>}
          <input
            className='form-input' type='password' placeholder='Contraseña' {...register('Pass', {
              required: {
                value: true,
                message: 'La constraseña es requerida'
              },
              minLength: {
                value: 8,
                message: 'La constraseña debe tener minimo 8 caracteres'
              }
            })}
          />
          {errors.Pass && <p className='error-input'> {errors.Pass.message} </p>}
          <Controller
            name='State'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'El tipo de documento es requerido'
              }
            }}
            defaultValue={1}
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Estado</option>
                <option value='1' className='form-option'>Activo</option>
                <option value='0' className='form-option'>Inactivo</option>
              </select>
            )}
          />
          {errors.State && <p className='error-input'> {errors.State.message} </p>}
        </div>
      </div>
      <button className='btn-submit' type='submit'>Registrar Usuario</button>
    </form>
  )
}

export default UpdateUser
