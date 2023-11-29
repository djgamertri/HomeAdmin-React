import { useEffect, useState } from 'react'
import { getCommonArea, patchCommonArea } from '../../api/zone.js'
import { toast } from 'sonner'

function UpdateCommonArea ({ id, actualizar }) {
  const [ZoneData, setZoneData] = useState({
    IdCommonArea: '',
    NameCommonArea: '',
    status: ''
  })

  useEffect(() => {
    getCommonArea(id).then((response) => {
      console.log(response.data[0])
      setZoneData(response.data[0])
    }).catch((error) => {
      console.error('Error al obtener usuario:', error)
    })
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setZoneData({
      ...ZoneData,
      [name]: value
    })
  }
  const handleSubmint = (event) => {
    event.preventDefault()
    patchCommonArea(ZoneData).then((response) => {
      toast.success(response.data.CommonArea + 'Actualizado correctamente')
      actualizar(true)
    }).catch((error) => {
      console.error(error.response.data)
    })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmint}>
      <input className='form-input' type='hidden' onChange={handleInputChange} value={ZoneData.IdCommonArea} name='IdCommonArea' />
      <input className='form-input' type='text' onChange={handleInputChange} value={ZoneData.NameCommonArea} name='NameCommonArea' />
      <select className='form-input' onChange={handleInputChange} value={ZoneData.status} name='status'>
        <option className='form-option'>Estado</option>
        <option value='1' className='form-option'>Activo</option>
        <option value='0' className='form-option'>Inactivo</option>
      </select>
      <button className='btn-submit' type='submit'>Actualizar Zona Común</button>
    </form>
  )
}

export default UpdateCommonArea
