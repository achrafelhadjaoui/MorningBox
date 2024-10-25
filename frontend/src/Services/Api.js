import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;