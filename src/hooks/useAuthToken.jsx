import { useEffect, useState } from 'react'

const useAuthToken = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    setToken(storedToken)
    return () => setToken(null)
  }, [])

  return token
}

export default useAuthToken
