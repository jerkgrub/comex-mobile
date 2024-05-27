import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Linking } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");


const EvaluateUsScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    marginTop: 90,
                    height: height / 5,
                }}

                resizeMode="contain"
                source={require("../../../assets/images/eval-qr.png")}
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
                    >Your feedback will make an impact.</Text>

                <Text
                    style={{
                        fontSize: 13,
                        textAlign: "center",
                        marginTop: 12,
                        paddingHorizontal: 30,
                        marginBottom: 50,
                    }}
                    >Save this QR for Evaluation forms.</Text>

                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 21,
                        fontWeight: "bold",
                        textAlign: "center",
                        letterSpacing: 1,
                        color: "#101023",
                    }}
                    >Can't scan?</Text>

                </View>
                
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center", 
                }}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lE-xohUMTNXSkVaNzg5UjZORTdTNFQ3Q1cyUE1FTi4u&origin=QRCode')}
                    style={{
                        backgroundColor: "#2a2aa5",
                        paddingVertical: 15,
                        paddingHorizontal: 45,
                        width: "100%", 
                        borderRadius: 10,
                        
                    
                    }}>
                        <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                        }}
                        >Tap here</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </SafeAreaView>
    );
};

export default EvaluateUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        
    }
})

