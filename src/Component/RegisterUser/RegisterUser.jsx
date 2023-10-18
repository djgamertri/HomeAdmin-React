function RegisterUser () {
  return (
    <form action='#' method='post' className='form-disposition' id='register'/* onSubmit={(event) => Enviar(event)} */>
      <div className='form-colums'>
        <div className='colum'>
          <input className='form-input' type='text' placeholder='Nombre' id='NameResident' name='Name' required />
          <input className='form-input' type='date' placeholder='fecha de nacimiento' id='DateBornResident' name='Birthday' required />
          <select id='TypeDocumentResident' name='TypeDocument' className='form-input'>
            <option className='form-option'>Tipo de documento</option>
            <option value='Tarjeta de identidad' className='form-option'>Tarjeta de identidad</option>
            <option value='Cedula ciudadania' className='form-option'>Cedula ciudadania</option>
            <option value='Cedula extranjeria' className='form-option'>Cedula extranjeria</option>
          </select>
          <input className='form-input' type='number' placeholder='Numero de documento' id='IdResident' name='NumDocument' required />
          <input className='form-input' type='number' placeholder='Telefono' id='PhoneNumberResident' name='Phone' required />
        </div>
        <div className='colum'>
          <input className='form-input' type='email' placeholder='Correo electronico' id='EmailResident' name='Email' required />
          <input className='form-input' type='number' placeholder='Numero de casa' id='NumberHouseResident' name='NumberHouse' required />
          <select id='Rol' name='Rol' className='form-input'>
            <option className='form-option'>Rol</option>
            <option value='Administrador' className='form-option'>Administrador</option>
            <option value='Residente' className='form-option'>Residente</option>
          </select>
          <input className='form-input' type='password' placeholder='Contraseña' id='PasswordResident' name='Pass' required />
          <select id='State' name='State' className='form-input'>
            <option className='form-option'>Estado</option>
            <option value='1' className='form-option'>Activo</option>
            <option value='0' className='form-option'>Inactivo</option>
          </select>
        </div>
      </div>
      <button className='btn-submit' type='submit'>Registrar Usuario</button>
    </form>
  )
}

export default RegisterUser
