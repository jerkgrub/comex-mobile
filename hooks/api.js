// api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const api = axios.create({
  baseURL: 'https://comex-server.vercel.app/api',
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userEmail');
      // Use React Navigation to redirect to login page if necessary
    }
    return Promise.reject(error);
  }
);

export default api;
