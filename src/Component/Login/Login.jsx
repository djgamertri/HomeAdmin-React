import React, { useState } from 'react'
import '../Table/Table.css'
import Modal from '../Modal/modal'

function LogIn () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen(true)}>
        Añadir
      </a>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>

  )
}

export default LogIn
