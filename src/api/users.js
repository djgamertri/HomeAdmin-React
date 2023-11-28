import axios from './axios.js'

const config = {
  headers: {
    authorization: localStorage.getItem('token')
  }
}

export const GetUser = () => axios.get('/Residents', config)
export const PostUser = user => axios.post('/Register', user, config)
export const PatchUser = user => axios.patch('/Resident', user, config)
