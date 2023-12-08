import { useEffect, useState } from 'react'
import { GetOneUser, UpdateUser as UpdateFetch } from '../../api/users'
import { toast } from 'sonner'
import './Profile.css'

function Profile () {
  const userId = localStorage.getItem('IdUser')
  const [userData, setUserData] = useState({
    IdUser: userId,
    NameUser: '',
    BirthDate: '',
    TypeDoc: '',
    NumDoc: '',
    Phone: '',
    Email: '',
    NumHouse: '',
    RoleUser: '',
    Pass: '',
    StatusUser: ''
  })

  useEffect(() => {
    GetOneUser(userId)
      .then((response) => {
        console.log(response.data[0])
        response.data[0].BirthDate = new Date(response.data[0].BirthDate).toISOString().split('T')[0]
        setUserData(response.data[0])
      })
      .catch((error) => {
        console.error('Error al obtener usuario:', error)
      })
  }, [userId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    UpdateFetch(userData)
      .then((response) => {
        console.log(response)
        toast.success('Datos actualizados correctamente')
      })
      .catch((error) => {
        console.error(error)
        toast.error(error.response.data.message)
      })
  }

  return (
    <form className='form-disposition-profile' onSubmit={handleSubmit}>
      <input className='form-input-profile' type='hidden' onChange={handleInputChange} value={userData.IdUser} name='Id' />
      <input className='form-input-profile' type='text' onChange={handleInputChange} value={userData.NameUser} placeholder='Nombre' name='NameUser' required />
      <input className='form-input-profile' type='date' onChange={handleInputChange} value={userData.BirthDate} placeholder='fecha de nacimiento' name='BirthDate' required />
      <select name='TypeDoc' onChange={handleInputChange} value={userData.TypeDoc} className='form-input-profile' required>
        <option value='' className='form-option-profile'>Tipo de documento</option>
        <option value='Tarjeta de identidad' className='form-option-profile'>Tarjeta de identidad</option>
        <option value='Cedula ciudadania' className='form-option-profile'>Cedula ciudadania</option>
        <option value='Carnet de Extranjeria' className='form-option-profile'>Carnet de extranjeria</option>
        <option value='DNI' className='form-option-profile'>DNI</option>
        <option value='Pasaporte' className='form-option-profile'>Pasaporte</option>
        <option value='Cedula extranjeria' className='form-option-profile'>Cedula extranjeria</option>
      </select>
      <input className='form-input-profile' type='number' onChange={handleInputChange} value={userData.NumDoc} placeholder='Numero de documento' name='NumDoc' required />
      <input className='form-input-profile' type='email' onChange={handleInputChange} value={userData.Email} placeholder='Correo electronico' name='Email' required />
      <input className='form-input-profile' type='number' onChange={handleInputChange} value={userData.NumHouse} placeholder='numero de casa' name='NumHouse' required />
      <select name='RoleUser' onChange={handleInputChange} value={userData.RoleUser} className='form-input-profile' required>
        <option value='' className='form-option-profile'>Rol</option>
        <option value='Administrador' className='form-option-profile'>Administrador</option>
        <option value='Residente' className='form-option-profile'>Residente</option>
      </select>
      <input className='form-input-profile' type='number' onChange={handleInputChange} value={userData.Phone} placeholder='Telefono' name='Phone' required />
      <select name='StatusUser' onChange={handleInputChange} value={userData.StatusUser} className='form-input-profile hidden-input'>
        <option value='' className='form-option-profile'>Estado</option>
        <option value='1' className='form-option-profile'>Activo</option>
        <option value='0' className='form-option-profile'>Inactivo</option>
      </select>
      <input className='form-input-profile' type='password' onChange={handleInputChange} value={userData.Pass} placeholder='Contraseña' name='Pass' required />
      <button className='btn-submit' type='submit'>Actualiza Datos</button>
    </form>
  )
}

export default Profile
