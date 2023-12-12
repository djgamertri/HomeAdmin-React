import { useForm } from 'react-hook-form'
import { NewRent } from '../../api/rent.js'
import { toast } from 'sonner'
import { GetUser } from '../../api/users.js'
import { getCommonAreas } from '../../api/zone.js'
import { useEffect, useState } from 'react'

function RegisterRent ({ actualizar }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [Users, setUsers] = useState([])
  const [Zones, setZones] = useState([])

  useEffect(() => {
    GetUser()
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
    getCommonAreas()
      .then((response) => {
        console.log(response.data)
        setZones(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  const newRent = async (data) => {
    try {
      const res = await NewRent(data)
      console.log(res)
      toast.success('registrado correctamente')
      actualizar(true)
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
      <select
        type='number' placeholder='Id Usuario' className='form-input' {...register('IdUser', {
          required: {
            value: true,
            message: 'El residente es requerido'
          }
        })}
      >
        <option value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      {errors.IdUser && <span className='errors'>{errors.IdUser.message}</span>}
      <select
        type='number' placeholder='Id Zona Común' className='form-input' {...register('IdCommonArea', {
          required: {
            value: true,
            message: 'La zona común es requerida'
          }
        })}
      >
        <option value=''>Zona Común</option>
        {Zones.map((zone) => (
          <option key={zone.IdCommonArea} value={zone.IdCommonArea}>
            {zone.NameCommonArea}
          </option>
        ))}
      </select>
      {errors.IdCommonArea && <span className='errors'>{errors.IdCommonArea.message}</span>}
      <input
        type='date' placeholder='Fecha del uso' className='form-input' {...register('RentDate', {
          required: {
            value: true,
            message: 'La fecha de alquiler es requerida'
          }
        })}
      />
      {errors.RentDate && <span className='errors'>{errors.RentDate.message}</span>}
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default RegisterRent
