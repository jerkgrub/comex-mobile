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
const { height } = Dimensions.get("window");
import { UserContext } from "./RegisterScreen";
import { PasswordInput } from "../../components/PasswordInput";

const ChangePassScreen =({navigation})=>{   

    const { user } = React.useContext(UserContext);

    const { setUser } = React.useContext(UserContext);
    const [theUsername, setTheUsername] =useState('');
    const [oldPass, setOldpass] =useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPassword2, setNewPassword2] =useState('');

    const goChangePassword = () => {
        if (theUsername !== user.username) {
            alert("Username does not match the current user.");
        } else if (newPassword !== newPassword2) {
            alert("New passwords do not match.");
        } else if (oldPass !== user.password) {
            alert("Old password is incorrect.");
        } else if (newPassword.length < 6) {
            alert("New password must be at least 6 characters long.");
        } else {
            setUser({ username: theUsername, password: newPassword });
            console.log({username: theUsername, password: newPassword});
            navigation.navigate('Login', {theUsername, newPassword});
            alert("Password successfully changed. Congrats sayo!");
        }
    };

    const gotoLogin2=()=>{
        navigation.navigate('Login', {oldPass:'', newPassword:''});
    }

    return(
        <SafeAreaView>
            <View 
            style={{
                padding: 20,
            }}>
                <View style={{
                    alignItems: "center",
                    marginVertical: 10,
                }}>
                    <Text 
                    style={{
                        fontSize: 40,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#2a2aa5",
                        marginTop: 30,
                    }}>
                        Change Your Password</Text>
                </View>

                <View 
                style={{
                    marginVertical: 5,
                }}>
                    
                    <PasswordInput 
                    placeholder="Current Password"
                    value={oldPass}
                    setValue={setOldpass}
                    />
                    
                    <PasswordInput 
                    placeholder="New Password"
                    value={newPassword}
                    setValue={setNewPassword}
                    />

                    <PasswordInput 
                    placeholder="Confirm New Password"
                    value={newPassword2}
                    setValue={setNewPassword2}
                    />
                </View>
            
                {/* login button */}
                <TouchableOpacity 
                onPress={goChangePassword}
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
                    >Save Changes</Text>
                </TouchableOpacity>

            </View>

            <ImageBackground 
                style={{
                    height: height / 3.6,
                }}
                resizeMode="contain"
                source={require("../../assets/images/register-header.png")}
                />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  });

export default ChangePassScreen;