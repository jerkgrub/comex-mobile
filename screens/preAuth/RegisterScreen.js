import { 
    Dimensions, 
    View, Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
} from "react-native";

import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PasswordInput } from "../../components/PasswordInput";
import { LargeSize } from "../../components/Constants";
import SocialsLogin from "../../components/SocialsLogin";
const { height } = Dimensions.get("window");
export const UserContext = React.createContext();


// for API's natin
export function UserProvider({ children }) {
    const [user, setUser] = React.useState({ username: '', password: '' });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }

const RegisterScreen =({navigation})=>{   
    

    const { setUser } = React.useContext(UserContext);
    const [theUsername, setTheUsername] =useState('');
    const [thePassword, setThePassword] = useState('');
    const [thePassword2, setThePassword2] =useState('');

    const forgotPass = () => {
        navigation.navigate('Change Pass');
    };

    const gotoLogin = () => {
        if (thePassword === thePassword2 && theUsername.length >= 6 && thePassword.length >= 6) {
            setUser({ username: theUsername, password: thePassword });
            console.log({username: theUsername, password: thePassword})
            navigation.navigate('Login', {theUsername, thePassword});
        } else if (thePassword !== thePassword2) {
          alert("Passwords do not match.");
        } else {
          alert("Username and password must be at least 6 characters long.");
        }
      };

    const gotoLogin2=()=>{
        navigation.navigate('Login', {theUsername:'', thePassword:''});
    }

    return(
        <SafeAreaView>
            <View 
            style={{
                padding: 20,
            }}>
                <View style={{
                    alignItems: "center",
                    marginVertical: 20,
                }}>
                    <Text 
                    style={{
                        fontSize: LargeSize,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#2a2aa5",
                        marginTop: 30,
                    }}>
                        Create Your Account</Text>
                </View>

                <View 
                style={{
                    marginVertical: 5,

                }}>
                    <TextInput 
                    placeholder="Username"
                    placeholderTextColor={"#818181"}
                    value={theUsername}
                    onChangeText={(text)=>{setTheUsername(text)}}
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
                    value={thePassword}
                    setValue={setThePassword}
                    />
                    <PasswordInput 
                    placeholder="Confirm Password"
                    value={thePassword2}
                    setValue={setThePassword2}
                    />
                </View>
                
                <View>
                    <TouchableOpacity
                    onPress={forgotPass}>
                        <Text 
                    style={{
                        fontSize: 12,
                        alignSelf: "flex-end",
                    }}>
                        Forgot your Password?</Text>    
                    </TouchableOpacity>
                    
                </View>

                {/* login button */}
                <TouchableOpacity 
                onPress={gotoLogin}
                style={{
                    backgroundColor: "#2a2aa5",
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginVertical: 20,
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    >Sign up</Text>
                </TouchableOpacity>

                <SocialsLogin/>

                {/* create new acc */}
                <TouchableOpacity 
                onPress={gotoLogin2}
                style={{
                    paddingVertical: 0,
                    borderRadius: 10,
                    marginVertical: 20,
                }}>
                    

                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    >Already have an account?</Text>
                </TouchableOpacity>

            </View>

            <ImageBackground 
                style={{
                    height: height / 3.9,
                }}
                resizeMode="contain"
                source={require("../../assets/images/register-header.png")}
                />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  });

export default RegisterScreen;