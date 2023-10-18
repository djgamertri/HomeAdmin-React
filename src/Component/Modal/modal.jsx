import React, { useEffect } from 'react'
import './modal.css'

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
    <div className='modal' data-animation='slideInOutRight'>
      <div className='modal-dialog'>
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
      </div>
    </div>
  )
}

export default Modal
