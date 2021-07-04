import axios from 'axios';

const baseURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
