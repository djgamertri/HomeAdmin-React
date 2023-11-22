import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const registFee = fee => axios.post('/Pay', fee)
export const updateFee = fee => axios.patch('/Pay', fee)
export const GetFees = () => axios.get('/Pays', config)
export const GetPayById = (id) => axios.get(`/Pay/${id}`, config)
