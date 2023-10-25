import React, { useState } from 'react'
import '../Table/Table.css'
import FunctLogin from './FunctLogin'

function LogIn () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <a href='#' className='btn' onClick={() => setIsModalOpen(true)}>
        LogIn
      </a>
      <FunctLogin isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>

  )
}

export default LogIn
