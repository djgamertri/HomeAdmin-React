import { useForm } from 'react-hook-form'
import { postCommonArea } from '../../api/zone.js'
import { toast } from 'sonner'

function NewCommonArea ({ registrar }) {
  const { register, handleSubmit } = useForm()

  const newZone = async (data) => {
    try {
      const res = await postCommonArea(data)
      toast.success(res.data.CommonArea + 'registrado correctamente')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    newZone(res)
  })
  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input className='form-input' placeholder='Name CommonArea' type='text' {...register('CommonArea', { required: true })} />
      <br />
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default NewCommonArea
