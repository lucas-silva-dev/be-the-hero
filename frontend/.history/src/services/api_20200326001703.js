import axios from 'axios';

const ai = axios.create({
  baseURL: 'http:/localhost:3333'
})

export default axios;