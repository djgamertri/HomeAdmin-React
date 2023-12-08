import { useForm } from 'react-hook-form'
import { NewFee } from '../../api/Fee'
import { useEffect, useState } from 'react'
import { GetUser } from '../../api/users'
import { toast } from 'sonner'

function RegisterFee ({ actualizar }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [Users, setUsers] = useState([])

  useEffect(() => {
    GetUser()
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  const fee = async (data) => {
    try {
      const res = await NewFee(data)
      console.log(res.data)
      actualizar(true)
      toast.success('Cuota registrada correctamente')
    } catch (err) {
      console.log(err)
      toast.error('Error al registrar la cuota: ' + err)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    fee(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <select
        className='form-input' {...register('User', {
          required: {
            value: true,
            message: 'Seleccione un Residente'
          }
        })}
      >
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      {errors.User && <span className='errors'>{errors.User.message}</span>}
      <input
        className='form-input' type='date' placeholder='Fecha' {...register('Date', {
          required: {
            value: true,
            message: 'La fecha del pago es requerida'
          }
        })}
      />
      {errors.Date && <span className='errors'>{errors.Date.message}</span>}
      <select
        className='form-input' defaultValue='1' {...register('State', {
          required: {
            value: true,
            message: 'El estado del pago es requerdio'
          }
        })}
      >
        <option value=''> Estado de pago </option>
        <option value={1}> Al día </option>
        <option value={0}> Pendiente </option>
      </select>
      {errors.State && <span className='errors'>{errors.State.message}</span>}
      <input className='form-input' type='text' placeholder='descripcion del pago' {...register('File', { required: true })} name='File' defaultValue='Se pago la administracion' />
      <button className='btn-submit' type='submit'>Regitrar cuota</button>
    </form>
  )
}

export default RegisterFee
