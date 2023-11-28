import React, { useState } from 'react'
import Login from '../Form/Login/Login'
import Modal from '../Component/Modal/modal'
function Index () {
  const [isModalLogin, setIsModalLogin] = useState(false)
  return (
    <div>
      <a className='btn btn-register' onClick={() => setIsModalLogin(true)}>
        Login
      </a>
      <td>
        <a data-open='modal2' id='update'><span className='status delete btn'>Eliminar</span></a>
      </td>
      <Modal isOpen={isModalLogin} closeModal={() => setIsModalLogin(false)} title='Login' headerModal>
        <Login />
      </Modal>
    </div>
  )
}

export default Index
