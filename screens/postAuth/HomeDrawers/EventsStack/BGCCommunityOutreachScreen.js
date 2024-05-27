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
import { NUColor2 } from "../../../../components/Constants";
const { height } = Dimensions.get("window");


const BGCCommunityOutreachScreen = ({navigation}) => {3

    const joinEvent =()=>{
        alert("We have notified the Event Organizer. Successfully joined the event!");
    } 

    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    marginTop: -5,
                    height: height / 3.1,
                }}

                resizeMode="contain"
                source={require("../../../../assets/images/bgc.jpg")}
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
                        color: "#35408e",
                    }}
                    >BGC Community Outreach</Text>

                <Text
                    style={{
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: 12,
                        paddingHorizontal: 30,
                    }}
                    >Here at NU MOA Community Extension Brigade, we help EVERYBODY, EVEN the fortunate.</Text>

                </View>
                
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 60,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center", 
                }}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Join Event Form')} 
                    style={{
                        backgroundColor: '#d8b638',
                        paddingVertical: 15,
                        paddingHorizontal: 55,
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
                        >Join Event</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </SafeAreaView>
    );
};

export default BGCCommunityOutreachScreen;

const styles = StyleSheet.create({
    
})