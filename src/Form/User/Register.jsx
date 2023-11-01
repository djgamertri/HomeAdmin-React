import { useForm, Controller } from 'react-hook-form'
import { PostUser } from '../../api/users.js'
function RegisterUser () {
  const { register, handleSubmit, formState: { errors }, control } = useForm()
  const NewResident = async (data) => {
    try {
      const res = PostUser(data)
      console.log(res.data)
    } catch (err) {
      console.error(err.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    NewResident(data)
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
            rules={{ required: true }}
            defaultValue='Tarjeta de identidad'
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Tipo de documento</option>
                <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
                <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
                <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
              </select>
            )}
          />
          <input className='form-input' type='number' placeholder='Numero de documento' {...register('NumDocument', { required: true, valueAsNumber: true })} />
          <input className='form-input' type='number' placeholder='Telefono' {...register('Phone', { required: true, valueAsNumber: true })} />
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
            rules={{ required: true }}
            defaultValue='Residente'
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Rol</option>
                <option value='Administrador' className='form-option'>Administrador</option>
                <option value='Residente' className='form-option'>Residente</option>
              </select>
            )}
          />
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
          <Controller
            name='State'
            control={control}
            rules={{ required: true }}
            defaultValue={1}
            render={({ field }) => (
              <select {...field} className='form-input'>
                <option className='form-option'>Estado</option>
                <option value='1' className='form-option'>Activo</option>
                <option value='0' className='form-option'>Inactivo</option>
              </select>
            )}
          />
        </div>
      </div>
      <button className='btn-submit' type='submit'>Registrar Usuario</button>
    </form>
  )
}

export default RegisterUser
