import { useForm, Controller } from 'react-hook-form'
import { registFee } from '../../api/fee.js'
function RegisterFee () {
  const { register, handleSubmit, control } = useForm()
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
  return (
    <form className='form-disposition' id='register' onSubmit={handleSubmit(sendData)}>
      <input className='form-input' type='number' placeholder='Numero de documento Usuario' {...register('User', { required: true, valueAsNumber: true })} />
      <input className='form-input' type='date' placeholder='Fecha' {...register('Date')} />
      <Controller
        name='State'
        control={control}
        rules={{ required: true }}
        defaultValue={1}
        render={({ field }) => (
          <select {...field} className='form-input'>
            <option value={1}> Pago </option>
            <option value={0}> No pago </option>
          </select>
        )}
      />
      <input className='form-input' type='text' placeholder='descrpcion del pago' {...register('File', { required: true })} id='File' name='File' defaultValue='Se pago la administracion' />
      <button className='btn-submit' type='submit'>Regitrar cuota</button>
    </form>
  )
}

export default RegisterFee
