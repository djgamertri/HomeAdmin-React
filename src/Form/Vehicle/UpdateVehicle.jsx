import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { getVehicle, updateVehicle } from '../../api/Vehicles.js'
import { GetUser } from '../../api/users.js'

function UpdateCommonArea ({ id, actualizar }) {
  const [Users, setUsers] = useState([])

  const [Vehicle, setVehicle] = useState({
    Plate: '',
    TypeVehicle: '',
    StatusVehicle: '',
    IdUser: ''
  })

  useEffect(() => {
    getVehicle(id)
      .then((response) => {
        console.log(response.data[0])
        setVehicle(response.data[0])
      }).catch((error) => {
        console.error('Error al obtener usuario:', error)
      })
    GetUser()
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setVehicle({
      ...Vehicle,
      [name]: value
    })
  }
  const handleSubmint = (event) => {
    event.preventDefault()
    updateVehicle(Vehicle)
      .then((response) => {
        toast.success(response.data.TypeVehicle + ' Actualizado correctamente')
        actualizar(true)
      }).catch((error) => {
        console.error(error.response.data)
      })
  }
  console.log(Vehicle)

  return (
    <form className='form-disposition' onSubmit={handleSubmint}>
      <input className='form-input' placeholder='Numero de placa' type='text' onChange={handleInputChange} value={Vehicle?.Plate} name='Plate' />
      <select className='form-input' onChange={handleInputChange} value={Vehicle?.TypeVehicle} name='TypeVehicle'>
        <option hidden value=''>Tipo de Vehiculo</option>
        <option value='Automóvil' className='form-option'>Automóvil</option>
        <option value='Motocicleta' className='form-option'>Motocicleta</option>
        <option value='Bicicleta' className='form-option'>Bicicleta</option>
      </select>
      <select className='form-input' onChange={handleInputChange} value={Vehicle?.IdUser} name='IdUser'>
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      <select className='form-input' onChange={handleInputChange} value={Vehicle?.StatusVehicle} name='StatusVehicle'>
        <option className='form-option'>Estado</option>
        <option value='1' className='form-option'>Activo</option>
        <option value='0' className='form-option'>Inactivo</option>
      </select>
      <button className='btn-submit' type='submit'>Actualizar</button>
    </form>
  )
}

export default UpdateCommonArea
