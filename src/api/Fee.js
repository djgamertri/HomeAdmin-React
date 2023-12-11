import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const NewFee = fee => axios.post('/Pay', fee, config)

export const getOneFee = (id) => axios.get(`/Pay/${id}`, config)

export const updateFee = fee => axios.patch('/Pay', fee, config)

export const GetFees = () => axios.get('/Pays', config)
