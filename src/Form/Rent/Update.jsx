import { useState, useEffect } from 'react'
import { GetRent, UpdateRent } from '../../api/rent.js'
import { toast } from 'sonner'

function Update ({ id, actualizar }) {
  const [RentData, setRentData] = useState({
    IdRent: '',
    NameCommonArea: '',
    NameUser: '',
    RentDate: '',
    status: '',
    active: ''
  })

  useEffect(() => {
    GetRent(id).then((response) => {
      console.log(response.data[0])
      response.data[0].RentDate = new Date(response.data[0].RentDate).toISOString().split('T')[0]
      setRentData(response.data[0])
    }).catch((error) => {
      console.error(error.response.data)
    })
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRentData({
      ...RentData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    UpdateRent(RentData).then((response) => {
      toast.success('Actualizado Correctamente')
      actualizar(true)
    }).catch((error) => {
      console.error(error.response.data)
    })
  }
  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <input className='form-input' type='hidden' onChange={handleInputChange} value={RentData.IdRent} name='IdRent' />
      <input className='form-input' type='text' onChange={handleInputChange} value={RentData.NameCommonArea} name='NameCommonArea' />
      <input className='form-input' type='text' onChange={handleInputChange} value={RentData.NameUser} name='NameUser' />
      <input className='form-input' type='date' onChange={handleInputChange} value={RentData.RentDate} name='RentDate' />
      <select className='form-input' onChange={handleInputChange} value={RentData.status} name='status'>
        <option className='form-option'>Estado Solicitud</option>
        <option value='1'>Aceptar</option>
        <option value='0'>Rechazar</option>
      </select>
      <select className='form-input' onChange={handleInputChange} value={RentData.active} name='active'>
        <option className='form-option'>Estado</option>
        <option value='1'>Activo</option>
        <option value='0'>Inactivo</option>
      </select>
      <button className='btn-submit' type='submit'>Actualizar Solicitud</button>
    </form>
  )
}

export default Update
