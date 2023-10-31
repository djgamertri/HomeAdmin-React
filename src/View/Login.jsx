import React, { useState } from 'react'
import Login from '../Form/Login/Login'
import Modal from '../Component/Modal/modal'

function LogIn () {
  // Login
  const [isModalOpen6, setIsModalOpen6] = useState(false)

  return (
    <div>
      <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen6(true)}>
        Login
      </a>
      <Modal isOpen={isModalOpen6} closeModal={() => setIsModalOpen6(false)} title='Login'>
        <Login />
      </Modal>
    </div>
  )
}

export default LogIn
