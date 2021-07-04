import axios from 'axios';

const baseURL = process.env.NODE_ENV
  ? 'http://localhost:5000'
  : 'https://json-server-todo-app-0.herokuapp.com/';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
