import axios from './axios.js'

export const registFee = fee => axios.post('/Pay', fee)
export const updateFee = fee => axios.patch('/Pay', fee)
