import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const GetRentPending = () => axios.get('/GetRentPending', config)
export const GetRentAccepted = () => axios.get('/GetRentAccepted', config)
