import axios from './axios.js'

const config = {
  headers: {
    authorization: localStorage.getItem('token')
  }
}

export const getCommonAreas = () => axios.get('/CommonAreas', config)
export const getCommonArea = (id) => axios.get(`/CommonArea/${id}`, config)
export const patchCommonArea = commonarea => axios.patch('/CommonArea', commonarea, config)
