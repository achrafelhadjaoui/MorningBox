import api from "../Api.js";

// Register function
export const register = async (data) => {
    try {
      const response = await api.post('/register', data);
      return response.data;
    } catch (error) {
      console.error('Registration failed', error);
      throw error.response?.data || 'Registration failed';
    }
  };