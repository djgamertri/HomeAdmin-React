import { useForm } from 'react-hook-form'
import { NewRent } from '../../api/rent.js'
import { toast } from 'sonner'

function RegisterRent ({ registrar }) {
  const { register, handleSubmit } = useForm()
  const newRent = async (data) => {
    try {
      const res = await NewRent(data)
      console.log(res)
      toast.success('registrado correctamente')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const sendData = handleSubmit((data) => {
    const res = data
    newRent(res)
  })
  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input type='number' placeholder='Id Usuario' className='form-input' {...register('IdUser')} />
      <br />
      <input type='number' placeholder='Id Zona Común' className='form-input' {...register('IdCommonArea')} />
      <br />
      <input type='date' placeholder='Fecha del uso' className='form-input' {...register('RentDate')} />
      <br />
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default RegisterRent
