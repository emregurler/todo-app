import axios from 'axios';

const baseURL = 'http://165.227.162.75:3000/';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
