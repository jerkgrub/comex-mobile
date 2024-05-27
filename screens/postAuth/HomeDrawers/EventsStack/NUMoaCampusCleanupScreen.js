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

const NUMoaCampusCleanupScreen = ({navigation}) => {

    const joinEvent = () => {
        alert("We have notified the Event Organizer. Successfully joined the event!");
    }

    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    marginTop: -18,
                    height: height / 3.1,
                }}

                resizeMode="contain"
                source={require("../../../../assets/images/nu-cleanup.jpg")}
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
                    >NU Moa Campus Cleanup</Text>

                <Text
                    style={styles.EventDetails}
                    >Location: NU Moa Campus</Text>

                <Text
                    style={styles.EventDetails}
                    >Date & Time: March 13, 2024 4AM-8AM</Text>

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
                        backgroundColor: "#d8b638",
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

export default NUMoaCampusCleanupScreen;

const styles = StyleSheet.create({
    EventDetails: {
        fontSize: 13,
        textAlign: "center",
        marginTop: 12,
        paddingHorizontal: 30,
    }
    
})