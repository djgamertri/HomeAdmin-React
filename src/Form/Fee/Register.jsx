function RegisterFee () {
  return (
    <form action='#' method='post' className='form-disposition' id='register'>
      <input className='form-input' type='number' placeholder='Numero de documento Usuario' id='NameUser' name='User' />
      <input className='form-input' type='date' placeholder='Fecha' id='Date' name='Date' />
      <select id='State' name='State' className='form-input'>
        <option className='form-option'>Estado</option>
        <option value={1} className='form-option'>Pago</option>
        <option value={0} className='form-option'>No pago</option>
      </select>
      <input className='form-input' type='text' placeholder='descrpcion del pago' id='File' name='File' defaultValue='Se pago la administracion' />
      <button className='btn-submit' type='submit'>Regitrar cuota</button>
    </form>
  )
}

export default RegisterFee
