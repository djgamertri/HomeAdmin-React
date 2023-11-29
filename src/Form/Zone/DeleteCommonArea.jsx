import { useEffect, useState } from 'react'
import { getCommonArea, deleteCommonArea } from '../../api/zone'
import { toast } from 'sonner'

function DeleteCommonArea ({ id, eliminar }) {
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
      toast.success(response.data.NameCommonArea + ' eliminado correctamente')
      eliminar(true)
    }).catch((error) => {
      console.error(error.response.data)
    })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <h1>¿Estas seguro de eliminar esta Zona Común?</h1>
      <h3> {data.NameCommonArea} </h3>
      <button className='btn-submit' type='submit'>Confirmar</button>
    </form>
  )
}

export default DeleteCommonArea
