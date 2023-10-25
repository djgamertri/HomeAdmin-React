import { Route, Routes } from 'react-router-dom'
import SideBar from './Component/SideBar/sideBar'
import Dashboard from './View/Dashboard'
import Resident from './View/Resident'
import Fee from './View/Fee'
import Vote from './View/Vote'
import Park from './View/Park'
import Zone from './View/Zone'
import Help from './View/Help'
import Login from './View/Login'
import Header from './Component/Header/Header'
import './Main.css'
import { useState } from 'react'

function App () {
  const [isClaseAgregar, setClaseAgregar] = useState(false)
  const navbar = () => {
    setClaseAgregar(!isClaseAgregar)
  }
  return (
    <>
      <SideBar />
      <div className={`main ${isClaseAgregar ? 'activate' : ''}`}>
        <Header navbar={navbar} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Resident' element={<Resident />} />
          <Route path='/Tax' element={<Fee />} />
          <Route path='/Votacion' element={<Vote />} />
          <Route path='/Parking' element={<Park />} />
          <Route path='/Zone' element={<Zone />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Settings' element={<Zone />} />
        </Routes>
      </div>
    </>
  )
}

export default App
