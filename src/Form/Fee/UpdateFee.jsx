import { getOneFee, updateFee } from '../../api/Fee'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { GetUser } from '../../api/users'

function UpdateFee ({ id, actualizar }) {
  const [Fee, setFee] = useState({
    IdUser: '',
    RegistDate: '',
    StatusPayAdmin: '',
    FIlePayAdmin: '',
    IdPayAdmin: ''
  })
  const [Users, setUsers] = useState([])

  useEffect(() => {
    getOneFee(id)
      .then((response) => {
        console.log(response.data[0])
        response.data[0].RegistDate = new Date(response.data[0].RegistDate).toISOString().split('T')[0]
        setFee(response.data[0])
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
    setFee({
      ...Fee,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateFee(Fee)
      .then((response) => {
        console.log(response)
        toast.success('Id ' + response.data.IdPayAdmin + ' de Cuota Actualizado correctamente')
        actualizar(true)
      }).catch((error) => {
        console.error(error)
      })
  }

  console.log(Fee)

  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <input className='form-input' type='number' hidden name='Id' onChange={handleInputChange} value={Fee?.IdPayAdmin} />
      <select className='form-input' onChange={handleInputChange} value={Fee?.IdUser} name='IdUser'>
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      <input className='form-input' type='date' placeholder='Fecha' onChange={handleInputChange} value={Fee?.RegistDate} name='RegistDate' />
      <select className='form-input' onChange={handleInputChange} value={Fee.StatusPayAdmin} name='StatusPayAdmin'>
        <option value=''> Estado de Pago </option>
        <option value={1}> Al día </option>
        <option value={0}> Pendiente </option>
      </select>
      <input className='form-input' type='text' hidden placeholder='descripcion del pago' onChange={handleInputChange} defaultValue={Fee?.FIlePayAdmin} name='FIlePayAdmin' />
      <button className='btn-submit' type='submit'>Actualizar cuota</button>
    </form>
  )
}

export default UpdateFee
