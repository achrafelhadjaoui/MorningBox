import api from '../Api.js'

// Login function
export const Login = async (data) => {
    try {
      const response = await api.post('/login', data);
      // Store JWT or other auth token in localStorage/sessionStorage
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      // Return or throw the error to handle it in the component
      console.error('Login failed', error);
      throw error.response?.data || 'Login failed';
    }
  };