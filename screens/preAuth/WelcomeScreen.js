import { 
    Dimensions, 
    View, Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
} from "react-native";

import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PasswordInput } from "../../components/PasswordInput";
const { height } = Dimensions.get("window");


const WelcomeScreen = ({navigation}) => {

    const [theUsername, setTheUsername] =useState('');
    const [thePassword, setThePassword] = useState('');
    const [thePassword2, setThePassword2] =useState('');
    
    const gotoLogin=()=>{
        navigation.navigate('Login', { theValue: { theUsername, thePassword } });
    }
    
    const gotoRegister=()=>{
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    height: height / 2.5,
                }}

                resizeMode="contain"
                source={require("../../assets/images/welcome-img.png")}
                />
                <View 
                style={{
                    paddingHorizontal: 20,
                    paddingTop: 50,
                }}>
                    <Text
                    style={{
                        fontSize: 29,
                        fontWeight: "bold",
                        textAlign: "center",
                        letterSpacing: 1,
                        color: "#2a2aa5",
                    }}
                    >Unlock Your Community Impact</Text>

                <Text
                    style={{
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: 12,
                        paddingHorizontal: 30,
                    }}
                    >Connect, Contribute, and Grow Together at NU MOA Community Extension Brigade.</Text>

                </View>
                
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 60,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between", 
                }}>
                    <TouchableOpacity
                    onPress={gotoLogin}
                    style={{
                        backgroundColor: "#2a2aa5",
                        paddingVertical: 15,
                        paddingHorizontal: 55,
                        width: "100%", 
                        borderRadius: 10,
                    
                    }}>
                        <Text
                        style={{
                            fontSize: 18,
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                        >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={gotoRegister}
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 45,
                        width: "100%", 
                        borderRadius: 10,
                    
                    }}>
                        <Text
                        style={{
                            fontSize: 18,
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                        >Register</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    
})