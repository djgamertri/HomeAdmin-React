import { Route, Routes } from 'react-router-dom'
import Dashboard from './View/Dashboard'
import Resident from './View/Resident'
import Fee from './View/Fee'
import Vote from './View/Vote'
import Park from './View/Park'
import Zone from './View/Zone'
import Help from './View/Help'
import Setting from './View/Setting'
import Index from './View/Index'
import './Main.css'

function App () {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Resident' element={<Resident />} />
          <Route path='/Resident/:id' element={<Resident />} />
          <Route path='/Tax' element={<Fee />} />
          <Route path='/Tax/:id' element={<Fee />} />
          <Route path='/Votacion' element={<Vote />} />
          <Route path='/Parking' element={<Park />} />
          <Route path='/Zone' element={<Zone />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Settings' element={<Setting />} />
        </Routes>
      </div>
    </>
  )
}

export default App
