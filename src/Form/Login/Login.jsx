import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth.js'
import { toast } from 'sonner'

function Login ({ closeModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const signin = async (user) => {
    try {
      const res = await login(user)
      localStorage.setItem('token', res.data.token)
      toast.success('Ingreso Correctamente')
      closeModal(false)
      navigate('/Dashboard')
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    signin(res)
    console.log(data)
  })

  return (
    <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
      <input
        className='form-input' placeholder='Correo electronico' type='text' {...register('Email', {
          required: {
            value: true,
            message: 'Correo electronico requerdio'
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Formato invalido'
          }
        })}
      />
      {errors.Email && <span className='errors'>{errors.Email.message}</span>}
      <input
        className='form-input' placeholder='Contraseña' type='password' {...register('Pass', {
          required: {
            value: true,
            message: 'Contraseña requerida'
          },
          minLength: {
            value: 8,
            message: 'La contraseña requiere de minimo 8 caracteres'
          }
        })}
      />
      {errors.Pass && <span className='errors'>{errors.Pass.message}</span>}
      <button className='btn-submit' type='submit'>Login</button>
    </form>
  )
}

export default Login
