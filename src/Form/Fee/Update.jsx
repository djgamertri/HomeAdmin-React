import { useEffect, useState } from 'react'
import { GetOneFee, UpdateFee as UpdateFetchFee } from '../../api/Fee.js'
import { GetOneUser } from '../../api/users.js'
import { toast } from 'sonner'

function UpdateFee ({ id }) {
  const [feeData, setFeeData] = useState({
    IdUser: '',
    RegistDate: '',
    StatusPayAdmin: '',
    FIlePayAdmin: '',
    IdPayAdmin: ''
  })
  const [user, setUser] = useState('')

  useEffect(() => {
    console.log(id)
    GetOneFee(id)
      .then(response => {
        console.log(response.data[0])
        response.data[0].RegistDate = new Date(response.data[0].RegistDate).toISOString().split('T')[0]
        setFeeData(response.data[0])
        console.log(response.data[0])
        // Obtener el usuario
        GetOneUser(response.data[0].IdUser)
          .then(response => {
            console.log(response.data[0].NumDoc)
            setUser(response.data[0].NumDoc)
          })
          .catch(error => {
            console.error('Erro al buscar el Usuario', error)
          })
      })
      .catch(error => {
        console.error('Error al obtener Pago', error)
      })
  }, [id])

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser((name === 'IdUser') ? value : user)
    setFeeData({
      ...feeData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    UpdateFetchFee(feeData)
      .then(response => {
        console.log(response.data)
        toast.success('Pago actualizado correctamente')
        // actualizar(true)
      })
      .catch(error => {
        console.error(error.response.data)
      })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={feeData.IdPayAdmin} className='form-input' type='hidden' placeholder='ID de Pago' name='Id' required />
      <input onChange={handleInputChange} value={user} className='form-input' type='number' placeholder='Numero de documento del usuario' name='IdUser' required />
      <input onChange={handleInputChange} value={feeData.RegistDate} className='form-input' type='date' placeholder='Fecha' name='RegistDate' required />
      <select className='form-input' onChange={handleInputChange} value={feeData.StatusPayAdmin} name='StatusPayAdmin' required>
        <option value=''> Estado de Pago </option>
        <option value={1}> Al día </option>
        <option value={0}> Pendiente </option>
      </select>
      <input onChange={handleInputChange} value={feeData.FIlePayAdmin} className='form-input hidden-input' type='text' placeholder='Descripción' name='FIlePayAdmin' required />
      <button className='btn-submit' type='submit'>
        Actualizar cuota
      </button>
    </form>
  )
}

export default UpdateFee
