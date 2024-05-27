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
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "./RegisterScreen";
import { PasswordInput } from "../../components/PasswordInput";
import { LargeSize } from "../../components/Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SocialsLogin from "../../components/SocialsLogin";

const { height } = Dimensions.get("window");

const LoginScreen =(props)=>{   

    const { user } = React.useContext(UserContext);

    const navigation = useNavigation();

    const { route } = props;
    const { theUsername, thePassword } = route.params;

    const [theLuser, setTheLuser] =useState('');
    const [theLpass, setTheLpass] = useState('');

    const gotoRegister=()=>{
        navigation.navigate('Register');
    }

    const gotoHome = () => {
        if (theLuser.trim() === '' || theLpass.trim() === '') {
            alert("Please fill up the form properly");
            return;
        }
    
        if (user.username === theLuser && user.password === theLpass) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Drawer' }],
            })
            console.log(theLuser, theLpass)
        } else {
            alert("Incorrect Username or Password!");
        }
    };

    const forgotPass = () => {
        navigation.navigate('Change Pass');
    };

    return(
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
            }}>
                
                <View style={{
                    alignItems: "center",
                    marginVertical: 0,
                }}>
                    <Text 
                    style={{
                        fontSize: LargeSize,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#2a2aa5",
                        marginTop: -15,
                        marginBottom: 8,
                    }}>
                        Login</Text>
                </View>

                <View 
                style={{
                    marginVertical: 20,
                }}>
                    <TextInput 
                    placeholder="Username"
                    placeholderTextColor={"#818181"}
                    onChangeText={(text)=>{setTheLuser(text)}}
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

                <TouchableOpacity 
                onPress={gotoHome}
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
                    >Sign in</Text>
                </TouchableOpacity>

                <SocialsLogin/>

                <TouchableOpacity 
                onPress={gotoRegister}
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
                    >Create new account</Text>

                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  });

export default LoginScreen;