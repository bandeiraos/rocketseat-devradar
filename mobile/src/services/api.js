import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.200.1.39:3333'
})

export default api;