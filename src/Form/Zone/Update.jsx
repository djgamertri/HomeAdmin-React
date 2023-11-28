import { useForm, Controller } from 'react-hook-form'
import { patchCommonArea } from '../../api/zone.js'

function UpdateCommonArea () {
  const { register, handleSubmit, control } = useForm()
  const updateCommonArea = async (data) => {
    try {
      const res = await patchCommonArea(data)
      console.log(res.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    updateCommonArea(res)
  })
  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input className='form-input' placeholder='Id CommonArea' type='number' {...register('Id', { required: true })} />
      <Controller
        name='Status'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} className='form-input'>
            <option className='form-option'>Selecion el status</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
        )}
      />
      <input className='form-input' placeholder='Name CommonArea' type='text' {...register('CommonArea', { required: true })} />
      <button className='btn-submit' type='submit'>Actualizar</button>
    </form>
  )
}

export default UpdateCommonArea
