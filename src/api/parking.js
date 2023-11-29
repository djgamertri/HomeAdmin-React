import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const PostNewParking = (data) => axios.post('/Parking', data, config)
export const GetResidentWithParking = () => axios.get('/ResidentWithParking', config)
export const GetResidentWithOutParking = () => axios.get('/ResidentWithOutParking', config)
