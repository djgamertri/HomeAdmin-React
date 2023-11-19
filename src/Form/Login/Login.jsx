import { useForm } from 'react-hook-form'
import { login } from '../../api/auth.js'

function Login () {
  const { register, handleSubmit } = useForm()

  const signin = async (user) => {
    try {
      const res = await login(user)
      localStorage.setItem('token', res.data.token)
    } catch (err) {
      console.error(err.response.data)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    signin(res)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input className='form-input' placeholder='Correo electronico' type='email' {...register('Email', { required: true })} />
      <input className='form-input' placeholder='Contraseña' type='password' {...register('Pass', { required: true })} />
      <button className='btn-submit' type='submit'>Login</button>
    </form>
  )
}

export default Login
