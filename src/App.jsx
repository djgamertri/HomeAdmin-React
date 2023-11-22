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
import Login from './View/Login'
import Setting from './View/Setting'
import { NavbarProvider, useNavbar } from './Contexts/NavbarContext'

// Se crea la funcion App para usar antes el contexto
// NavbarProvider que el useNavbar
function App () {
  return (
    <NavbarProvider>
      <AppContent />
    </NavbarProvider>
  )
}

function AppContent () {
  const { isNavbar } = useNavbar()

  return (
    <>
      <SideBar />
      <div className={`main ${isNavbar ? 'activate' : ''}`}>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Resident' element={<Resident />} />
          <Route path='/Resident/:id' element={<Resident />} />
          <Route path='/Tax' element={<Fee />} />
          <Route path='/Tax/:id' element={<Fee />} />
          <Route path='/Tax/:id' element={<Fee />} />
          <Route path='/Votacion' element={<Vote />} />
          <Route path='/Parking' element={<Park />} />
          <Route path='/Parking/:id' element={<Park />} />
          <Route path='/Zone' element={<Zone />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Settings' element={<Setting />} />
        </Routes>
      </div>
    </>
  )
}

export default App
