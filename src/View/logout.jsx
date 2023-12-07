import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Logout () {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
    localStorage.removeItem('User')
    toast.success('Cerraste sesión correctamente')
    navigate('/')
  }, [token])

  return (
    <div>Logout</div>
  )
}

export default Logout
