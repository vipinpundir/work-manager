import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// FOR ADD TASK 
const addTask = async (taskData: any) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// GET TASK BY USER ID 
const getTasksOfUserId = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/tasks`);
    return response
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// DELETE TASK BY USERID 
const deleteTask = async (userId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${userId}`);
    return response
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};


export default {
  addTask,
  getTasksOfUserId,
  deleteTask,
};
