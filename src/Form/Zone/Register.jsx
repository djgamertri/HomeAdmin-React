import { useForm } from 'react-hook-form'
import { postCommonArea } from '../../api/zone.js'

function RegisterCommonArea () {
  const { register, handleSubmit } = useForm()
  const newCommonArea = async (data) => {
    try {
      const res = await postCommonArea(data)
      console.log(res.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    newCommonArea(res)
  })
  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input className='form-input' placeholder='Name CommonArea' type='text' {...register('CommonArea', { required: true })} />
      <br />
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default RegisterCommonArea
