import { useEffect, useState } from 'react'
import { getCommonArea, deleteCommonArea } from '../../api/zone'
import { toast } from 'sonner'

function DeleteCommonArea ({ id, actualizar }) {
  const [data, setData] = useState({})
  useEffect(() => {
    getCommonArea(id).then((response) => {
      console.log(response.data[0])
      setData(response.data[0])
    }).catch((error) => {
      console.error(error.response.data)
    })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    deleteCommonArea(id).then((response) => {
      toast.success(response.data.NameCommonArea + ' actualizado correctamente')
      actualizar(true)
    }).catch((error) => {
      console.error(error.response.data)
    })
  }

  return (
    <form className='content-delete' onSubmit={handleSubmit}>
      <i className='fa-solid fa-triangle-exclamation' />
      <p>¿Estas seguro de eliminar la Zona Común {data.NameCommonArea}?</p>
      <button className='confirm btns' type='submit'>Confirmar</button>
    </form>
  )
}

export default DeleteCommonArea
