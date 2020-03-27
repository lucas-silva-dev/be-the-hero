import axios from 'axios';

const api = axios.create({
  baseURL: 'exp://192.168.15.8:3333'
})

export default api;