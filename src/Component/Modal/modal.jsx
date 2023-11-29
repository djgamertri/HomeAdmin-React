import React, { useEffect } from 'react'
import './modal.css'
import { motion } from 'framer-motion'

const Modal = ({ isOpen, closeModal, children, title }) => {
  useEffect(() => {
    const keyup = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    if (isOpen) {
      document.addEventListener('keyup', keyup)
    } else {
      document.removeEventListener('keyup', keyup)
    }
    return () => {
      document.removeEventListener('keyup', keyup)
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div className='modal'>
      <motion.div className='modal-dialog' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <header className='modal-header'>
          <br />
          <div>{title}</div>
          <button className='close-modal' aria-label='close-modal' onClick={closeModal}>
            ✕
          </button>
        </header>
        <section className='modal-content'>
          {children}
        </section>
      </motion.div>
    </div>
  )
}

export default Modal
