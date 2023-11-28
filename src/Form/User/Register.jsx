import { useForm } from 'react-hook-form'
import { Register } from '../../api/auth.js'
import { toast } from 'sonner'

function RegisterUser ({ actualizar }) {
  const { register, handleSubmit } = useForm()

  const signin = async (user) => {
    try {
      const res = await Register(user)
      toast.success(res.data.NameUser + ' registrado correctamente')
      actualizar(true)
    } catch (err) {
      console.error(err.response.data)
      toast.error('Error al registrar')
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
          <input className='form-input' type='text' placeholder='Nombre' id='UpdateNameResident' name='NameUser' required {...register('NameUser', { required: true })} />
          <input className='form-input' type='date' placeholder='fecha de nacimiento' id='UpdateBornResident' name='BirthDate' required {...register('BirthDate', { required: true })} />
          <select id='UpdateTypeDocumentResident' name='TypeDoc' className='form-input' {...register('TypeDoc', { required: true })}>
            <option className='form-option'>Tipo de documento</option>
            <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
            <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
            <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
          </select>
          <input className='form-input' type='number' placeholder='Numero de documento' id='UpdateIdResident' name='NumDoc' required {...register('NumDoc', { required: true })} />
          <input className='form-input' type='number' placeholder='Telefono' id='UpdatePhoneNumberResident' name='Phone' required {...register('Phone', { required: true })} />
        </div>
        <div className='colum'>
          <input className='form-input' type='email' placeholder='Correo electronico' id='UpdateEmailResident' name='Email' required {...register('Email', { required: true })} />
          <input className='form-input' type='number' placeholder='numero de casa' id='UpdateNumberHouseResident' name='NumHouse' required {...register('NumHouse', { required: true })} />
          <select id='UpdateRol' name='RoleUser' className='form-input' {...register('RoleUser', { required: true })}>
            <option className='form-option'>Rol</option>
            <option value='Administrador' className='form-option'>Administrador</option>
            <option value='Residente' className='form-option'>Residente</option>
          </select>
          <input className='form-input' type='password' placeholder='Contraseña' id='UpdatePasswordResident' name='Pass' required {...register('Pass', { required: true })} />
          <select id='UpdateState' name='StatusUser' className='form-input' {...register('StatusUser', { required: true })}>
            <option className='form-option'>Estado</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
        </div>
      </div>
      <button className='btn-submit' type='submit'>Registar Usuario</button>
    </form>
  )
}

export default RegisterUser
