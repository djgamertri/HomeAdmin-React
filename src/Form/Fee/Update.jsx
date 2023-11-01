function UpdateFee () {
  return (
    <form action='#' method='post' className='form-disposition' id='update'>
      <input className='form-input' type='number' id='UpdatePayId' name='Id' />
      <input className='form-input' type='number' placeholder='Nombre del usuario' id='UpdatePayUser' name='User' />
      <input className='form-input' type='date' placeholder='Fecha' id='UpdateDate' name='Date' />
      <select id='UpdateState' name='State' className='form-input'>
        <option className='form-option'>Estado</option>
        <option value={1} className='form-option'>Pago</option>
        <option value={0} className='form-option'>No pago</option>
      </select>
      <input className='form-input' type='text' placeholder='descrpcion del pago' id='UpdateFile' name='File' defaultValue='Se pago la administracion' />
      <button className='btn-submit' type='submit'>Modificar cuota</button>
    </form>

  )
}

export default UpdateFee
