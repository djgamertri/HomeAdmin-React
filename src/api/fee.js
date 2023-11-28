import axios from './axios.js'

const config = {
  headers: {
    authorization: localStorage.getItem('token')
  }
}

export const registFee = fee => axios.post('/Pay', fee)
export const updateFee = fee => axios.patch('/Pay', fee)
export const GetFees = () => axios.get('/Pays', config)
