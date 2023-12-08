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
        toast.success('Id ' + response.data.IdPayAdmin + ' de Cuota Actualizado correctamente')
        actualizar(true)
      }).catch((error) => {
        console.error(error)
      })
  }

  console.log(Fee)

  return (
    <form className='form-disposition' id='register' onSubmit={handleSubmit}>
      <input className='form-input' type='number' hidden name='Id' value={Fee?.IdPayAdmin} />

      <select className='form-input' onChange={handleInputChange} value={Fee?.IdUser} name='IdUser'>
        <option hidden value=''>Residente</option>
        {Users.map((user) => (
          <option key={user.IdUser} value={user.IdUser}>
            {user.NameUser}
          </option>
        ))}
      </select>
      <input className='form-input' type='date' placeholder='Fecha' onChange={handleInputChange} name='RegistDate' />
      <select className='form-input' onChange={handleInputChange} name='StatusPayAdmin'>
        <option hidden value=''> Estado de pago </option>
        <option value='1'> Pago </option>
        <option value='0'> No pago </option>
      </select>
      <input className='form-input' type='text' placeholder='descrpcion del pago' id='File' onChange={handleInputChange} defaultValue={Fee?.FIlePayAdmin} name='FIlePayAdmin' />
      <button className='btn-submit' type='submit'>Regitrar cuota</button>
    </form>
  )
}

export default UpdateFee
