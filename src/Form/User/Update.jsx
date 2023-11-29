import { useEffect, useState } from 'react'
import { GetOneUser, UpdateUser as UpdateFetch } from '../../api/users'
import { toast } from 'sonner'

function UpdateUser ({ id, actualizar }) {
  const [userData, setUserData] = useState({
    IdUser: '',
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
    GetOneUser(id)
      .then(response => {
        console.log(response.data[0])
        response.data[0].BirthDate = new Date(response.data[0].BirthDate).toISOString().split('T')[0]
        setUserData(response.data[0])
      })
      .catch(error => {
        console.error('Error al obtener usuario:', error)
      })
  }, [id])

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
      .then(response => {
        console.log(response.data)
        toast.success(response.data.NameUser + ' actualizado correctamente')
        actualizar(true)
      })
      .catch(error => {
        console.error(error.response.data)
      })
  }

  return (
    <form action='#' method='post' className='form-disposition' id='update' onSubmit={handleSubmit}>
      <div className='form-colums'>
        <div className='colum'>
          <input className='form-input' type='hidden' onChange={handleInputChange} value={userData.IdUser} id='IdUser' name='Id' />
          <input className='form-input' type='text' onChange={handleInputChange} value={userData.NameUser} placeholder='Nombre' id='UpdateNameResident' name='NameUser' required />
          <input className='form-input' type='date' onChange={handleInputChange} value={userData.BirthDate} placeholder='fecha de nacimiento' id='UpdateBornResident' name='BirthDate' required />
          <select id='UpdateTypeDocumentResident' name='TypeDoc' onChange={handleInputChange} value={userData.TypeDoc} className='form-input'>
            <option className='form-option'>Tipo de documento</option>
            <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
            <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
            <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
          </select>
          <input className='form-input' type='number' onChange={handleInputChange} value={userData.NumDoc} placeholder='Numero de documento' id='UpdateIdResident' name='NumDoc' required />
          <input className='form-input' type='number' onChange={handleInputChange} value={userData.Phone} placeholder='Telefono' id='UpdatePhoneNumberResident' name='Phone' required />
        </div>
        <div className='colum'>
          <input className='form-input' type='email' onChange={handleInputChange} value={userData.Email} placeholder='Correo electronico' id='UpdateEmailResident' name='Email' required />
          <input className='form-input' type='number' onChange={handleInputChange} value={userData.NumHouse} placeholder='numero de casa' id='UpdateNumberHouseResident' name='NumHouse' required />
          <select id='UpdateRol' name='RoleUser' onChange={handleInputChange} value={userData.RoleUser} className='form-input'>
            <option className='form-option'>Rol</option>
            <option value='Administrador' className='form-option'>Administrador</option>
            <option value='Residente' className='form-option'>Residente</option>
          </select>
          <input className='form-input' type='password' onChange={handleInputChange} value={userData.Pass} placeholder='Contraseña' id='UpdatePasswordResident' name='Pass' required />
          <select id='UpdateState' name='StatusUser' onChange={handleInputChange} value={userData.StatusUser} className='form-input'>
            <option className='form-option'>Estado</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
        </div>
      </div>
      <button className='btn-submit' type='submit'>Actualiza Usuario</button>
    </form>
  )
}

export default UpdateUser
