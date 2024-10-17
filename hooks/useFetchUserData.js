// src/hooks/useFetchUserData.js
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import api from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetchUserData = () => {
  const [user, setUser] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state

  const fetchUserData = async () => {
    try {
      // Retrieve the user's email from AsyncStorage
      const signedEmail = await AsyncStorage.getItem('userEmail'); // Ensure 'userEmail' is stored correctly

      if (signedEmail) {
        console.log(`Fetching user data for email: ${signedEmail}`);
        // Make an API call to fetch user data based on email
        const response = await api.get(`/users/email/${signedEmail}`);

        // Check if the response contains user data
        if (response.data && response.data.User) {
          setUser(response.data.User);
          console.log('User data fetched successfully:', response.data.User);
        } else {
          Alert.alert('Error', 'User data not found.');
        }
      } else {
        Alert.alert('Error', 'No user email found. Please log in.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Unable to fetch user data.');
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { user, loading };
};

export default useFetchUserData;
