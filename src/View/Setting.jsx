import React, { useEffect, useState } from 'react'
import SideBar from '../Component/SideBar/sideBar'
import Profile from '../Form/User/Profile'
import { GetOneUser } from '../api/users'

function Setting () {
  const [userData, setUserData] = useState(null)
  const userId = localStorage.getItem('IdUser')

  const getUserData = async () => {
    try {
      const user = await GetOneUser(userId)
      setUserData(user)
    } catch (error) {
      console.error('Error al obtener datos del usuario', error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  console.log(userData)

  return (
    <SideBar>
      <div className='profile-view'>
        <h1>Modificar Información Personal</h1>
        <Profile />
      </div>
    </SideBar>
  )
}

export default Setting
