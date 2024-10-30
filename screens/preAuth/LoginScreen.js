import React, { useState } from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PasswordInput } from '../../components/PasswordInput';
import { LargeSize } from '../../components/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './../../hooks/api'

const { height } = Dimensions.get('window');

const LoginScreen = (props) => {

  const navigation = useNavigation();
  const { route } = props;
  const { theUsername, thePassword } = route.params || {};

  const [theLuser, setTheLuser] = useState(theUsername || '');
  const [theLpass, setTheLpass] = useState(thePassword || '');

  const gotoHome = async () => {

    console.log("Login initiated with email:", theLuser); // Log email

    if (theLuser.trim() === '' || theLpass.trim() === '') {
      Alert.alert('Error', 'Please fill up the form properly');
      return;
    }

    try {
      console.log("Sending login request..."); // Before sending the request
      const response = await api.post('/login', {
        email: theLuser,
        password: theLpass,
      });

      console.log("Login response:", response); // Log the response

      const { message, token, user } = response.data;
      if (response.status === 200 && token) {
        console.log("Login successful, token received:", token); // Log the token

        // Save the token and user information in AsyncStorage
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userEmail', user.email);
        await AsyncStorage.setItem('userUsertype', user.usertype);

        // Handle redirection based on user type/message
        const successMessages = {
          'Successfully logged in as Admin': 'Drawer',
          'Successfully logged in as Student': 'Drawer',
          'Successfully logged in as NTP': 'Drawer',
          'Successfully logged in as Comex Coordinator': 'Drawer',
          'Successfully logged in as Faculty': 'Drawer',
        };

        const path = successMessages[message];
        console.log("Redirecting to:", path); // Log redirection path

        if (path) {
          Alert.alert('Success', 'Logged in successfully');
          navigation.reset({
            index: 0,
            routes: [{ name: path }],
          });
        } else {
          Alert.alert('Error', message);
        }
      }
    } catch (error) {
      console.log("Login error:", error); // Log the error

      const errorMessage = error.response?.data?.message || 'Something went wrong';
      Alert.alert('Error', errorMessage);
    }
  };

  const forgotPass = () => {
    console.log("Navigating to 'ChangePass' screen");
    navigation.navigate('ChangePass');
  };

  const gotoRegister = () => {
    console.log("Navigating to 'Register' screen");
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          marginTop: -10,
          height: height / 3,
        }}
        resizeMode="contain"
        source={require('../../assets/images/login-header.png')}
      />
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: 'center', marginVertical: 0 }}>
          <Text
            style={{
              fontSize: LargeSize,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#2a2aa5',
              marginTop: -15,
              marginBottom: 8,
            }}
          >
            Login
          </Text>
        </View>

        <View style={{ marginVertical: 20 }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#818181"
            onChangeText={setTheLuser}
            value={theLuser}
            style={{
              fontSize: 15,
              padding: 18,
              backgroundColor: '#e7e7e7',
              borderRadius: 10,
              marginVertical: 10,
            }}
          />

          <PasswordInput
            placeholder="Password"
            value={theLpass}
            setValue={setTheLpass}
          />
        </View>

        <View>
          <TouchableOpacity onPress={forgotPass}>
            <Text style={{ fontSize: 12, alignSelf: 'flex-end' }}>
              Forgot your Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={gotoHome}
          style={{
            backgroundColor: '#2a2aa5',
            paddingVertical: 15,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={gotoRegister}
          style={{
            paddingVertical: 0,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
