import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const GetRentPending = () => axios.get('/GetRentPending', config)
export const GetRentAccepted = () => axios.get('/GetRentAccepted', config)
export const NewRent = (data) => axios.post('/NewRent', data, config)
export const UpdateRent = (data) => axios.patch('/UpdateRent', data, config)
export const DeleteRent = (id) => axios.delete('/DeleteRent/' + id, config)
