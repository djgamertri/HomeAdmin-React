import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const GetUser = () => axios.get('/Residents', config)
export const GetOneUser = (id) => axios.get('/Resident/' + id, config)
export const UpdateUser = (user) => axios.patch('/Resident/', user, config)
export const DeleteUser = (id) => axios.delete('/Resident/' + id, config)
