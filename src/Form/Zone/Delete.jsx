import React from 'react'
import { deleteCommonArea } from '../../api/zone.js'

function DeleteCommonArea (data) {
  async function sendDelete (id) {
    try {
      const res = await deleteCommonArea(id)
      console.log(res.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }
  return (
    <form className='form-disposition'>
      <p>¿Estas seguro de eliminar esta Zona Comun?</p>
      <button className='btn-submit' type='submit' onSubmit={sendDelete(6)}> Eliminar </button>
    </form>
  )
}

export default DeleteCommonArea
