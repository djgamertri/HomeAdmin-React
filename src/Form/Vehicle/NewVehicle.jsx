import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { newVehicle } from '../../api/Vehicles.js'
import { useEffect, useState } from 'react'
import { GetUser } from '../../api/users.js'

function NewVehicle ({ actualizar }) {
  const [Users, setUsers] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm()

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
      console.log(res)
      toast.success(res.data.TypeVehicle + ' registrado correctamente')
      actualizar(true)
    } catch (error) {
      console.log(error.response.data)
      toast.error(error.response.data.message)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    newZone(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input
        className='form-input' placeholder='Numero de placa' type='text' {...register('Plate', {
          required: {
            value: true,
            message: 'Requiere un numero de placa'
          },
          valueAsNumber: true
        })}
      />
      {errors.Plate && <span className='errors'>{errors.Plate.message}</span>}
      <select
        className='form-input' {...register('TypeVehicle', {
          required: {
            value: true,
            message: 'Tipo de vehiculo requerido'
          }
        })}
      >
        <option hidden value=''>Tipo de Vehiculo</option>
        <option value='Automóvil' className='form-option'>Automóvil</option>
        <option value='Motocicleta' className='form-option'>Motocicleta</option>
        <option value='Bicicleta' className='form-option'>Bicicleta</option>
      </select>
      {errors.TypeVehicle && <span className='errors'>{errors.TypeVehicle.message}</span>}
      <select
        className='form-input' {...register('IdUser', {
          required: {
            value: true,
            message: 'Usuario requerido'
          }
        })}
      >
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      {errors.IdUser && <span className='errors'>{errors.IdUser.message}</span>}
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default NewVehicle
