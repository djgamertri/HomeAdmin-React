import axios from './axios.js'

export const registFee = fee => axios.post('/Pay', fee)
