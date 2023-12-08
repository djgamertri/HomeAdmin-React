import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { newVehicle } from '../../api/Vehicles.js'
import { useEffect, useState } from 'react'
import { GetUser } from '../../api/users.js'

function NewCommonArea ({ registrar }) {
  const [Users, setUsers] = useState([])
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    GetUser()
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  const newZone = async (data) => {
    try {
      const res = await newVehicle(data)
      toast.success(res.data.TypeVehicle + 'registrado correctamente')
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
      <input className='form-input' placeholder='Numero de placa' type='text' {...register('Plate', { required: 'Requiere un numero de placa', valueAsNumber: true })} />
      <select className='form-input' {...register('TypeVehicle', { required: true })}>
        <option hidden value=''>Tipo de Vehiculo</option>
        <option value='Automóvil' className='form-option'>Automóvil</option>
        <option value='Motocicleta' className='form-option'>Motocicleta</option>
        <option value='Bicicleta' className='form-option'>Bicicleta</option>
      </select>
      <select className='form-input' {...register('IdUser', { required: true })}>
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default NewCommonArea
