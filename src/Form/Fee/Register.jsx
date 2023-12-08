import { useForm } from 'react-hook-form'
import { registFee, GetFees } from '../../api/Fee.js'
import { toast } from 'sonner'

function RegisterFee ({ actualizar }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const registerFee = async (fee) => {
    try {
      const tableFee = await GetFees()
      const users = tableFee.data
      console.log(users)
      // Buscamos el id del usuario apartir del numero de documento
      const user = users.find(record => record.NumDoc === fee.User)
      // Si usaurio fue encontrado se remplaza el valor del numDoc por el ID
      if (user) {
        fee.User = user.IdUser
      }
      const res = await registFee(fee)
      console.log(res.data)
      toast.success('Pago registrado correctamente')
      actualizar(true)
    } catch (err) {
      console.error(err.response)
      toast.error(err.response.data.message)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    registerFee(res)
    console.log(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input
        className='form-input' type='number' placeholder='Numero de documento Usuario' {...register('User', {
          required: {
            value: true,
            message: 'Numero de documento requerido'
          },
          min: {
            value: 10000000,
            message: 'Numero de documento no valido'
          },
          maxLength: {
            value: 10,
            message: 'Numero de documento no valido'
          },
          max: {
            value: 4294967295,
            message: 'Numero de documento no valido'
          },
          valueAsNumber: true
        })}
      />
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
        className='form-input' {...register('State', {
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
      <input
        className='form-input' type='text' placeholder='Archivo del pago' {...register('File', {
          required: {
            value: true,
            message: 'Dexcripción del archivo requerido'
          }
        })}
      />
      {errors.File && <span className='errors'>{errors.File.message}</span>}
      <button className='btn-submit' type='submit'>Registrar</button>
    </form>
  )
}

export default RegisterFee
