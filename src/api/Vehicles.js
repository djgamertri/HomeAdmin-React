import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const getVehicles = () => axios.get('/Vehicle', config)

export const getVehicle = (id) => axios.get(`/Vehicle/${id}`, config)

export const newVehicle = vehicle => axios.post('/Vehicle', vehicle, config)

export const updateVehicle = vehicle => axios.patch('/Vehicle', vehicle, config)

export const deleteVehicle = (id) => axios.delete(`/Vehicle/${id}`, config)
