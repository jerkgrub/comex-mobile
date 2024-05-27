import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SocialsLogin = () => {
    return (
        <>
            <Text style={{
                color: "#827575",
                fontSize: 15,
                //fontWeight: "bold",
                textAlign: "center",
                marginHorizontal: 10,
            }}>Or continue with</Text>

            <View style={{
                marginVertical: 7,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 10,
            }}>
                <TouchableOpacity
                    style={{
                        marginHorizontal: 5,
                        padding: 7,
                        backgroundColor: "#c52c2c",
                        borderRadius: 15,
                    }}>
                    <Ionicons
                        name="logo-google"
                        size={27}
                        color="#dadada"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginHorizontal: 5,
                        padding: 7,
                        backgroundColor: "#2c7bc5",
                        borderRadius: 15,
                    }}>
                    <Ionicons
                        name="logo-facebook"
                        size={27}
                        color="#dadada"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginHorizontal: 5,
                        padding: 7,
                        backgroundColor: "#464EB8",
                        borderRadius: 15,
                    }}>
                    <Ionicons
                        name="logo-microsoft"
                        size={27}
                        color="#dadada"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default SocialsLogin;