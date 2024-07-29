import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Replace with your API base URL

const addTask = async (taskData: any) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

const getTasksOfUserId = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/tasks`);
    return response
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export default {
  addTask,
  getTasksOfUserId,
};
