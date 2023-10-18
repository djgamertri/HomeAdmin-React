import { Route, Routes } from 'react-router-dom'
import SideBar from './Component/SideBar/sideBar'
import Dashboard from './View/Dashboard'
import Resident from './View/Resident'
import Fee from './View/Fee'
import Vote from './View/Vote'
import Park from './View/Park'
import Zone from './View/Zone'
import Help from './View/Help'
import Header from './Component/Header/Header'
import './Main.css'

function App () {
  return (
    <>
      <SideBar />
      <div className='main'>
        <Header />
        <Routes>
          <Route path='/' element={<h1>Hola</h1>} />
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
