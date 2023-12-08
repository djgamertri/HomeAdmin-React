import { Route, Routes } from 'react-router-dom'
import Dashboard from './View/Dashboard'
import Resident from './View/Resident'
import Fee from './View/Fee'
import Park from './View/Park'
import Zone from './View/Zone'
import Help from './View/Help'
import './Main.css'
import Setting from './View/Setting'
import Index from './View/Index'
import { Toaster } from 'sonner'
import Logout from './View/logout'
import Vehicle from './View/vehicle'

function App () {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Resident' element={<Resident />} />
          <Route path='/Tax' element={<Fee />} />
          <Route path='/Parking' element={<Park />} />
          <Route path='/Vehicle' element={<Vehicle />} />
          <Route path='/Zone' element={<Zone />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Settings' element={<Setting />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <Toaster
          theme='system'
          richColors
          duration={3000}
          closeButton
          visibleToasts={3}
        />
      </div>
    </>
  )
}

export default App
