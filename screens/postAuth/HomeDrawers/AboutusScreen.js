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
const { height } = Dimensions.get("window");


const AboutusScreen = ({navigation}) => {

    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    marginTop: 40,
                    height: height / 3.1,
                }}

                resizeMode="contain"
                source={require("../../../assets/images/COMEX.png")}
                />
                <View 
                style={{
                    paddingHorizontal: 20,
                    paddingTop: 20 ,
                }}>
                    <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "left",
                        letterSpacing: 1,
                        color: "#35408e",
                    }}
                    >What is NU MoA ComEx?</Text>

                <Text
                    style={{
                        fontSize: 15,
                        marginTop: 12,
                        paddingHorizontal: 10,
                        justifyContent: "center",
                    }}
                    >
                    NU MOA Comex is a dynamic platform created by a youth organization dedicated to helping those in need through various programs and charity events. Join us in our mission to make a positive impact and create a brighter future for all.</Text>


                    <Text
                    style={{
                        marginTop: 50,
                        fontSize: 28,
                        fontWeight: "bold",
                        textAlign: "center",
                        letterSpacing: 1,
                        color: "#000000",
                    }}
                    >Born to Serve.</Text>

                </View>
                

                <ImageBackground 
                style={{
                    marginTop:0,
                    height: height / 3.6,
                }}

                resizeMode="contain"
                source={require("../../../assets/images/register-header.png")}
                />

                
                
            </View>
        </SafeAreaView>
    );
};

export default AboutusScreen;

const styles = StyleSheet.create({
    
})