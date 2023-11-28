import { toast } from 'sonner'

function Toast (msg, type, description) {
  const toastStyleSucces = {
    background: 'var(--green-hover)',
    color: 'var(--white)',
    border: 'none'
  }

  const toastStyleError = {
    background: 'var(--red-hover)',
    color: 'var(--white)',
    border: 'none'
  }

  if (type === 'error') {
    toast.error(`Error ${msg}`, {
      style: toastStyleError,
      description,
      duration: 3000
    })
  } else {
    toast.success(msg, {
      style: toastStyleSucces,
      duration: 3000
    })
  }
}

export default Toast
