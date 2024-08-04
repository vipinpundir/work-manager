import axios from 'axios';

const API_URL = process.env.API_URL

const signup = async (signupData: any) => {
  try {
    const response = await axios.post(`${API_URL}/users`, signupData);
    return response;
  } catch (error) {
    throw error;
  }
};

const login = async (loginData: any) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response;
  } catch (error) {
    throw error;
  }
};



const currentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/current`);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  signup,
  login,
  currentUser,
};
