import axios from './axios.js'

export const login = user => axios.post('/Login', user)
export const createUser = user => axios.post('/Register', user)
