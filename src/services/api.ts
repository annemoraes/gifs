import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giphy.com',
});

export default api;
