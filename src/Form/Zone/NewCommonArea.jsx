import { useForm } from 'react-hook-form'
import { postCommonArea } from '../../api/zone.js'
import { toast } from 'sonner'

function NewCommonArea ({ actualizar }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const newZone = async (data) => {
    try {
      const res = await postCommonArea(data)
      toast.success(res.data.CommonArea + ' registrado correctamente')
      actualizar(true)
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
      <input
        className='form-input' placeholder='Nombre Zona Común' type='text' {...register('CommonArea', {
          required: {
            value: true,
            message: 'El nombre de la zona común es requerido'
          }
        })}
      />
      {errors.CommonArea && <span className='errors'>{errors.CommonArea.message}</span>}
      <button className='btn-submit' type='submit'> Registrar Zona Común</button>
    </form>
  )
}

export default NewCommonArea
