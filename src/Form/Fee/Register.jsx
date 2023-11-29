import { useForm, Controller } from 'react-hook-form'
import { registFee } from '../../api/Fee.js'
import { toast } from 'sonner'

function RegisterFee ({ actualizar }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm()

  const registerFee = async (fee) => {
    try {
      const res = await registFee(fee)
      console.log(res.data)
      toast.success('Pago registrado correctamente')
      actualizar()
    } catch (err) {
      console.error(err.response.data)
      toast.error(err.response.data.message)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    registerFee(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input
        className='form-input' type='number' placeholder='Numero de documento Usuario' {...register('User', {
          required: {
            value: true,
            message: 'Numero de documento requerido'
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
      <Controller
        name='State'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'El estado del pago es requerido'
          }
        }}
        render={({ field }) => (
          <select {...field} className='form-input'>
            <option value=''> Estado de pago </option>
            <option value={1}> Pago </option>
            <option value={0}> No pago </option>
          </select>
        )}
      />
      {errors.State && <span className='errors'>{errors.State.message}</span>}
      <input
        className='form-input' type='text' placeholder='descrpcion del pago' {...register('File', {
          required: {
            value: true,
            message: 'La descripción es requerida'
          }
        })}
      />
      {errors.File && <span className='errors'>{errors.File.message}</span>}
      <button className='btn-submit' type='submit'>Registrar</button>
    </form>
  )
}

export default RegisterFee
