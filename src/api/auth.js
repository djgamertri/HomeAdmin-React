import axios from './axios.js'

export const login = user => axios.post('/Login', user)
