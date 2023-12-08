import { useForm } from 'react-hook-form'
import { NewFee } from '../../api/Fee'
import { useEffect, useState } from 'react'
import { GetUser } from '../../api/users'
import { toast } from 'sonner'

function RegisterFee ({ actualizar }) {
  const { register, handleSubmit } = useForm()
  const [Users, setUsers] = useState([])

  useEffect(() => {
    GetUser()
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  const fee = async (data) => {
    try {
      const res = await NewFee(data)
      console.log(res.data)
      actualizar(true)
      toast.success('Cuota registrada correctamente')
    } catch (err) {
      console.log(err)
      toast.error('Error al registrar la cuota: ' + err)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    fee(res)
  })

  return (
    <form className='form-disposition' id='register' onSubmit={handleSubmit(sendData)}>
      <select className='form-input' {...register('IdUser', { required: true })}>
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      <input className='form-input' type='date' placeholder='Fecha' {...register('RegistDate', { required: true })} />
      <select className='form-input' defaultValue='1' {...register('StatusPayAdmin', { required: true })}>
        <option hidden value=''> Estado de pago </option>
        <option value='1'> Pago </option>
        <option value='0'> No pago </option>
      </select>
      <input className='form-input' type='text' placeholder='descrpcion del pago' {...register('FIlePayAdmin', { required: true })} id='File' name='File' defaultValue='Se pago la administracion' />
      <button className='btn-submit' type='submit'>Regitrar cuota</button>
    </form>
  )
}

export default RegisterFee
