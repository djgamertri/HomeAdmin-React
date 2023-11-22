import { useForm, Controller } from 'react-hook-form'
import { registFee, GetPayById } from '../../api/fee.js'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function FeeForm () {
  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm()
  const params = useParams()

  let submit = 'Registrar cuota'

  if (params.id) {
    // eslint-disable-next-line no-unused-vars
    submit = 'Actualizar cuota'
  }

  const fee = async (data) => {
    try {
      const res = await registFee(data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    fee(res)
  })

  useEffect(() => {
    async function loadPay () {
      if (params.id) {
        const pay = await GetPayById(params.id)
        const value = pay.data[0]
        const date = new Date(value.Date).toISOString().split('T')[0]
        setValue('User', value.User)
        setValue('Date', date)
        setValue('State', value.State)
        setValue('File', value.File)
      }
    } loadPay()
  })
  return (
    <form className='form-disposition' id='register' onSubmit={handleSubmit(sendData)}>
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
      <button className='btn-submit' type='submit'>{submit}</button>
    </form>
  )
}

export default FeeForm
