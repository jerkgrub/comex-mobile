import { 
    Dimensions, 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../preAuth/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const AccountScreen = (props) => {
    const [parsedUser, setParsedUser] = useState(null);
    
    useEffect(() => {
        const fetchUser = async () => {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                setParsedUser(JSON.parse(user));
            }
        };
        fetchUser();
    }, []);

    const navigation = useNavigation();

    const goToEditProfile = () => {
        navigation.navigate('Edit Profile');
    };

    const goToChangePass = () => {
        navigation.navigate('Change Pass');
    };

    const goToParticipatedActivities = () => {
        navigation.navigate('View Participated Activities');
    };

    const goToRegisteredActivities = () => {
        navigation.navigate('View Registered Activities');
    };

    const goToDownloadCertificates = () => {
        navigation.navigate('Download Certificates');
    };

    return (
        <ScrollView>
            <SafeAreaView>
                <ImageBackground 
                    style={{
                        marginTop: 50,
                        height: height / 5,
                    }}
                    resizeMode="contain"
                    source={require("../../../assets/images/default-avatar.png")}
                />

                <View style={{ padding: 20 }}>
                    <View style={{
                        alignItems: "center",
                        marginVertical: 0,
                    }}>
                        {parsedUser && (
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "#2a2aa5",
                                marginTop: 0,
                                marginBottom: 8,
                            }}>
                                {parsedUser.u_fname} {parsedUser.u_mname} {parsedUser.u_lname}
                            </Text>
                        )}
                    </View>

                    <View style={{ marginVertical: 20 }}></View>
                    
                    <View>
                        <Text style={{
                            backgroundColor: "#171a0d",
                            paddingLeft : 20,
                            fontSize: 15,
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "justify",
                            paddingVertical: 15,
                            borderRadius: 5,
                            marginVertical: 10,
                        }}>
                            My Account
                        </Text>
                    </View>
                    
                    {/* Edit Profile Button */}
                    <TouchableOpacity 
                        onPress={goToEditProfile}
                        style={{
                            paddingVertical: 20,
                            borderRadius: 10,
                            paddingLeft: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="card-account-details" size={24} color="black" />
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                paddingLeft: 10,
                            }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                    {/* Change Password Button */}
                    <TouchableOpacity 
                        onPress={goToChangePass}
                        style={{
                            paddingVertical: 20,
                            borderRadius: 10,
                            paddingLeft: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="lock-reset" size={24} color="black" />
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                paddingLeft: 10,
                            }}>
                                Change Password
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* View Participated Activities Button */}
                    <TouchableOpacity 
                        onPress={goToParticipatedActivities}
                        style={{
                            paddingVertical: 20,
                            borderRadius: 10,
                            paddingLeft: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="diversity-3" size={24} color="black" />
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                paddingLeft: 10,
                            }}>
                                View Participated Activities
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* View Registered Activities Button */}
                    <TouchableOpacity 
                        onPress={goToRegisteredActivities}
                        style={{
                            paddingVertical: 20,
                            borderRadius: 10,
                            paddingLeft: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome6 name="clipboard-check" size={24} color="black" />
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                paddingLeft: 10,
                            }}>
                                View Registered Activities
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Download Certificates Button */}
                    <TouchableOpacity 
                        onPress={goToDownloadCertificates}
                        style={{
                            paddingVertical: 20,
                            borderRadius: 10,
                            paddingLeft: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="download-box-outline" size={24} color="black" />
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                paddingLeft: 10,
                            }}>
                                Download Certificates
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;