import { useForm } from 'react-hook-form'
import { NewRent } from '../../api/rent.js'
import { GetUser } from '../../api/users.js'
import { getCommonAreas } from '../../api/zone.js'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

function RegisterRent ({ registrar }) {
  const { register, handleSubmit } = useForm()
  const [Users, setUsers] = useState([])
  const [Areas, setAreas] = useState([])

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
        setAreas(response.data)
      }).catch((error) => {
        console.log(error.response.data)
      })
  }, [])
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
      <select
        className='form-input' {...register('IdUser', {
          required: {
            value: true,
            message: 'Seleccione un Residente'
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
      <br />
      <select
        className='form-input' {...register('IdCommonArea', {
          required: {
            value: true,
            message: 'Seleccione una Area Común'
          }
        })}
      >
        <option hidden value=''>Zona Común</option>
        {Areas.map((area) => (
          <option key={area.IdCommonArea} value={area.IdCommonArea}>
            {area.NameCommonArea}
          </option>
        ))}
      </select>
      <br />
      <input type='date' placeholder='Fecha del uso' className='form-input' {...register('RentDate')} />
      <br />
      <button className='btn-submit' type='submit'> Registrar </button>
    </form>
  )
}

export default RegisterRent
