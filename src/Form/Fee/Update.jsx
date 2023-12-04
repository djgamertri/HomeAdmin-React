import { useEffect, useState } from 'react'
import { GetOneFee, UpdateFee as UpdateFetch } from '../../api/Fee.js'
import { toast } from 'sonner'

function UpdateFee ({ id, actualizar }) {
  const [feeData, setFeeData] = useState({
    IdUser: '',
    IdPayAdmin: '',
    RegistDate: '',
    StatusPayAdmin: '',
    FIlePayAdmin: ''
  })

  useEffect(() => {
    GetOneFee(id)
      .then(response => {
        console.log(response.data[0])
        response.data[0].RegistDate = new Date(response.data[0].RegistDate).toISOString().split('T')[0]
        setFeeData(response.data[0])
      })
      .catch(error => {
        console.error('Error al obtener Pago', error)
      })
  }, [id])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFeeData({
      ...feeData,
      [name]: value
    })
  }

  const handleSubmits = event => {
    event.preventDefault()
    UpdateFetch(feeData)
      .then(response => {
        console.log(response)
        toast.success('Pago actualizado correctamente')
        actualizar(true)
      })
      .catch(error => {
        console.error(error.response.data)
      })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmits}>
      <input onChange={handleInputChange} value={feeData.IdUser} className='form-input' type='number' placeholder='ID de Usuario' name='IdUser' required />
      <input onChange={handleInputChange} value={feeData.IdPayAdmin} className='form-input' type='number' placeholder='ID de Pago' name='IdPayAdmin' required />
      <input onChange={handleInputChange} value={feeData.RegistDate} className='form-input' type='date' placeholder='Fecha' name='RegistDate' required />
      <select className='form-input' onChange={handleInputChange} value={feeData.StatusPayAdmin} name='StatusPayAdmin' required>
        <option value=''> Estado de Pago </option>
        <option value={1}> Al día </option>
        <option value={0}> Pendiente </option>
      </select>
      <input onChange={handleInputChange} value={feeData.FIlePayAdmin} className='form-input' type='text' placeholder='Fecha' name='FIlePayAdmin' required />
      <button className='btn-submit' type='submit'>
        Actualizar cuota
      </button>
    </form>
  )
}

export default UpdateFee
