import React, { useState } from 'react'
import Login from '../Form/Login/Login'
import Modal from '../Component/Modal/modal'
import AssignParking from '../Form/Parking/Assign'

function LogIn () {
  // Login
  const [isModalOpenLogin, setisModalOpenLogin] = useState(false)

  // Parking
  const [isModalOpenAssingParking, setisModalOpenAssingParking] = useState(false)

  return (
    <div>
      <a className='btn card open-modal btn' onClick={() => setisModalOpenLogin(true)}>
        Login
      </a>
      <a className='btn card open-modal btn' onClick={() => setisModalOpenAssingParking(true)}>
        Asignar Parqueadero
      </a>
      <td>
        <a data-open='modal2' id='update'><span className='status delete btn'>Eliminar</span></a>
      </td>
      <Modal isOpen={isModalOpenLogin} closeModal={() => setisModalOpenLogin(false)} title='Login'>
        <Login />
      </Modal>
      <Modal isOpen={isModalOpenAssingParking} closeModal={() => setisModalOpenAssingParking(false)} title='Asignar parqueadero'>
        <AssignParking />
      </Modal>
    </div>
  )
}

export default LogIn
