function UpdateUser () {
  return (
    <form action='#' method='post' className='form-disposition' id='update'/* onSubmit={(event) => Enviar(event)} */>
      <div className='form-colums'>
        <div className='colum'>
          <input className='form-input' type='hidden' id='IdUser' name='Id' />
          <input className='form-input' type='text' placeholder='Nombre' id='UpdateNameResident' name='Name' required />
          <input className='form-input' type='date' placeholder='fecha de nacimiento' id='UpdateBornResident' name='Birthday' required />
          <select id='UpdateTypeDocumentResident' name='TypeDocument' className='form-input'>
            <option className='form-option'>Tipo de documento</option>
            <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
            <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
            <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
          </select>
          <input className='form-input' type='number' placeholder='Numero de documento' id='UpdateIdResident' name='NumDocument' required />
          <input className='form-input' type='number' placeholder='Telefono' id='UpdatePhoneNumberResident' name='Phone' required />
        </div>
        <div className='colum'>
          <input className='form-input' type='email' placeholder='Correo electronico' id='UpdateEmailResident' name='Email' required />
          <input className='form-input' type='number' placeholder='numero de casa' id='UpdateNumberHouseResident' name='NumberHouse' required />
          <select id='UpdateRol' name='Rol' className='form-input'>
            <option className='form-option'>Rol</option>
            <option value='Administrador' className='form-option'>Administrador</option>
            <option value='Residente' className='form-option'>Residente</option>
          </select>
          <input className='form-input' type='password' placeholder='Contraseña' id='UpdatePasswordResident' name='Pass' required />
          <select id='UpdateState' name='State' className='form-input'>
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
