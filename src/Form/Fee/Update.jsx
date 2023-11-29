import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { GetOneFee, updateFee as UpdateFetch } from '../../api/Fee.js'
import { toast } from 'sonner'

function UpdateFee ({ id, actualizar }) {
  const { register, control, formState: { errors } } = useForm()
  const [feeData, setFeeData] = useState({
    User: '',
    Date: '',
    State: '',
    File: ''
  })

  useEffect(() => {
    GetOneFee(id)
      .then(response => {
        console.log(response.data[0])
        setFeeData(response.data[0])
      })
      .catch(error => {
        console.error('Error al obtener Pago', error)
      })
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFeeData({
      ...feeData,
      [name]: value
    })
  }

  const handleSubmits = (event) => {
    event.preventDefault()
    UpdateFetch(feeData)
      .then(response => {
        console.log(response.data)
        toast.success('Pago actualizado correctamente')
        actualizar(true)
      })
      .catch(error => {
        console.error(error.response.data)
      })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmits}>
      <input
        onChange={handleInputChange} className='form-input' type='number' placeholder='Numero de documento Usuario' {...register('User', {
          required: {
            value: true,
            message: 'Numero de documento requerido'
          },
          valueAsNumber: true
        })}
      />
      {errors.User && <span className='errors'>{errors.User.message}</span>}
      <input
        onChange={handleInputChange} className='form-input' type='date' placeholder='Fecha' {...register('Date', {
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
        defaultValue={1}
        render={({ field }) => (
          <select {...field} className='form-input' onChange={handleInputChange}>
            <option value={1}> Pago </option>
            <option value={0}> No pago </option>
          </select>
        )}
      />
      {errors.State && <span className='errors'>{errors.State.message}</span>}
      <input
        onChange={handleInputChange} className='form-input' type='text' placeholder='descrpcion del pago' {...register('File', {
          required: {
            value: true,
            message: 'La descripción es requerida'
          }
        })}
      />
      {errors.File && <span className='errors'>{errors.File.message}</span>}
      <button className='btn-submit' type='submit'>Actualizar cuota</button>
    </form>
  )
}

export default UpdateFee
