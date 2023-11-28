import axios from './axios.js'

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const getCommonAreas = () => axios.get('/CommonAreas', config)
export const getCommonArea = (id) => axios.get(`/CommonAreas/${id}`, config)
export const postCommonArea = area => axios.post('/CommonArea', area, config)
export const patchCommonArea = area => axios.patch('/CommonArea', area, config)
export const deleteCommonArea = (id) => axios.delete(`/CommonArea/${id}`, config)
