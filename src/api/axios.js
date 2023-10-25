import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://api-homeadmin-9egs-dev.fl0.io/api'
})
export default instance
