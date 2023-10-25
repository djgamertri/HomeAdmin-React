import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../../api/auth.js'
import '../Modal/modal.css'
const signin = async (user) => {
  try {
    const res = await login(user)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}
// import { useForm } from 'react-hook-form'
function FunctLogin ({ isOpen, closeModal }) {
  const { register, handleSubmit } = useForm()
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
  const sendData = handleSubmit((data) => {
    const res = data
    console.log(res)
    signin(res)
  })
  return (
    <div className='modal' data-animation='slideInOutRight'>
      <div className='modal-dialog'>
        <header className='modal-header'>
          <br />
          <div>Login</div>
          <button className='close-modal' aria-label='close-modal' onClick={closeModal}>
            ✕
          </button>
        </header>
        <section className='modal-content'>
          <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
            <div className='colum'>
              <input className='form-input' placeholder='Correo electronico' type='email' {...register('Email', { required: true })} />
              <input className='form-input' placeholder='Contraseña' type='password' {...register('Pass', { required: true })} />
            </div>
            <button className='btn-submit' type='submit'>Login</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default FunctLogin
