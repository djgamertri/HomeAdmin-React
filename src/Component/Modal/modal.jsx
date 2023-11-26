import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './modal.css'

const Modal = ({ isOpen, closeModal, children, title, headerModal }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.pathname.split('/')[1]

  function modalUpdate () {
    if (url === 'Resident') {
      navigate('/Resident')
    } else if (url === 'Tax') {
      navigate('/Tax')
    }
  }

  useEffect(() => {
    const keyup = (e) => {
      if (e.key === 'Escape') {
        modalUpdate()
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

  function buttonCloseModal () {
    // Limpia los parámetros y cerrar modal
    modalUpdate()
    closeModal()
  }

  if (!isOpen) return null

  return (
    <div className='modal' data-animation='slideInOutRight'>
      <div className='modal-dialog'>
        {headerModal && (
          <header className='modal-header'>
            <br />
            <div>{title}</div>
            <button className='close-modal' aria-label='close-modal' onClick={buttonCloseModal}>
              ✕
            </button>
          </header>
        )}
        <section className='modal-content'>
          {children}
        </section>
      </div>
    </div>
  )
}

export default Modal
