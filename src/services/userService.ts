import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const signup = async (signupData: any) => {
  try {
    const response = await axios.post(`${API_URL}/users`, signupData);
    return response;
  } catch (error) {
    console.error('Error in signup user:', error);
    throw error;
  }
};

const login = async (loginData: any) => {
  try {
    const response = await axios.post(`${API_URL}/users`, loginData);
    return response;
  } catch (error) {
    console.error('Error in signup user:', error);
    throw error;
  }
};

export default {
    signup,
    login,
};
