import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { PasswordInput } from "../../components/PasswordInput";
import { LargeSize } from "../../components/Constants";
import SocialsLogin from "../../components/SocialsLogin";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const { route } = props;
  const { theUsername, thePassword } = route.params || {};

  const [theLuser, setTheLuser] = useState(theUsername || "");
  const [theLpass, setTheLpass] = useState(thePassword || "");

  const gotoRegister = () => {
    navigation.navigate("Register");
  };

  const gotoHome = async () => {
    if (theLuser.trim() === "" || theLpass.trim() === "") {
      alert("Please fill up the form properly");
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.170:8000/api/login', {
        email: theLuser,
        password: theLpass,
      });

      const { message, token, user } = response.data;
      if (token) {
        // Save the token and navigate to the home screen
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Drawer' }],
      })
      } else {
        alert(message || "Login failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  };

  const forgotPass = () => {
    navigation.navigate("Change Pass");
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          marginTop: -10,
          height: height / 3,
        }}
        resizeMode="contain"
        source={require("../../assets/images/login-header.png")}
      />

      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: 0,
          }}
        >
          <Text
            style={{
              fontSize: LargeSize,
              fontWeight: "bold",
              textAlign: "center",
              color: "#2a2aa5",
              marginTop: -15,
              marginBottom: 8,
            }}
          >
            Login
          </Text>
        </View>

        <View
          style={{
            marginVertical: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#818181"}
            onChangeText={(text) => {
              setTheLuser(text);
            }}
            value={theLuser}
            style={{
              fontSize: 15,
              padding: 18,
              backgroundColor: "#e7e7e7",
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
            <Text
              style={{
                fontSize: 12,
                alignSelf: "flex-end",
              }}
            >
              Forgot your Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={gotoHome}
          style={{
            backgroundColor: "#2a2aa5",
            paddingVertical: 15,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
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
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
