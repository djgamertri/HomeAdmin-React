import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const GetUser = () => axios.get('/Residents', config)
