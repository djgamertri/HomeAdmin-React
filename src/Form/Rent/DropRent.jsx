import { useEffect, useState } from 'react'
import { GetRent, DeleteRent } from '../../api/rent.js'
import { toast } from 'sonner'

function DropRent ({ id, eliminar }) {
  const [data, setData] = useState({})
  useEffect(() => {
    GetRent(id).then((response) => {
      console.log(response.data[0])
      setData(response.data[0])
    }).catch((error) => {
      console.error(error.response.data)
    })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    DeleteRent(id).then((response) => {
      toast.success('eliminado correctamente')
      eliminar(true)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }

  return (
    <form className='form-disposition' onSubmit={handleSubmit}>
      <h1>¿Estas seguro de eliminar esta solicitud?</h1>
      <p>{data.NameUser} usara {data.NameCommonArea}</p>
      <button className='btn-submit' type='submit'>Confirmar</button>
    </form>
  )
}

export default DropRent
