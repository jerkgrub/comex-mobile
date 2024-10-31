import { 
    Dimensions, 
    View, Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
} from "react-native";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../preAuth/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height } = Dimensions.get("window");


const AccountScreen =(props)=>{

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

    const goChangePass=()=>{
        navigation.navigate('Change Pass');
    }

    const { user } = React.useContext(UserContext);

    const navigation = useNavigation();

    // destructure ang user and pass
    const { route } = props;

    // usestates for the Username and Pass
    const [theLuser, setTheLuser] =useState('');
    const [theLpass, setTheLpass] = useState('');

    const gotoRegister=()=>{
        navigation.navigate('Register');
    }

    const gotoHome=()=>{

        // 
        navigation.reset({
            index: 0,
            routes: [{ name: 'Drawer' }],
        })
    }

    // const gotoHome=()=>{

    //     if (theUsername === theLuser && thePassword === theLpass) {
    //         navigation.reset({
    //             index: 0,
    //             routes: [{ name: 'Drawer' }],
    //         })
    //         console.log(theLuser, theLpass)
    //     } else if (theLuser === '' || theLpass === '') {
    //         alert("Please fill up the form properly");
    //     } else {
    //         alert("Incorrect Username or Password!");
    //     }
    // }

    return(
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

            <View 
            style={{
                padding: 20,
            }}>
                
                <View style={{
                    alignItems: "center",
                    marginVertical: 0,
                }}>
                    {parsedUser && (
                        <Text 
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                                // letterSpacing: 1,
                                color: "#2a2aa5",
                                marginTop: 0,
                                marginBottom: 8,
                            }}>
                            {parsedUser.u_fname} {parsedUser.u_mname} {parsedUser.u_lname}
                        </Text>
                    )}
                    {/* <Text style={{
                           
                        fontSize: 15,
                        maxWidth: '70%',
                        textAlign: 'center',
                        marginTop: 10,

                    }}>
                        Please sign in to continue.</Text> */}
                </View>

                <View 
                style={{
                    marginVertical: 20,

                }}>
                </View>
                
                <View>
                    <Text
                    style={{
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
                
                {/* login button */}
                    <TouchableOpacity 
                    style={{
                        // backgroundColor: "#2a2aa5",
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
                        // fontWeight: "bold",
                        textAlign: "justify",
                        paddingLeft: 10,
                        }}
                        >Edit Profile</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    onPress={goChangePass}
                    style={{
                        // backgroundColor: "#2a2aa5",
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
                        // fontWeight: "bold",
                        textAlign: "justify",
                        paddingLeft: 10,
                        }}
                        >Change Password</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={goChangePass}
                    style={{
                        // backgroundColor: "#2a2aa5",
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
                        // fontWeight: "bold",
                        textAlign: "justify",
                        paddingLeft: 10,
                        }}
                        >View Participated Activities</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={goChangePass}
                    style={{
                        // backgroundColor: "#2a2aa5",
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
                        // fontWeight: "bold",
                        textAlign: "justify",
                        paddingLeft: 10,
                        }}
                        >View Registered Activities</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={goChangePass}
                    style={{
                        // backgroundColor: "#2a2aa5",
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
                        // fontWeight: "bold",
                        textAlign: "justify",
                        paddingLeft: 10,
                        }}
                        >Download Certificates</Text>
                    </View>
                    </TouchableOpacity>

                {/* create new acc */}
                {/* <TouchableOpacity 
                onPress={gotoRegister}
                style={{
                    // backgroundColor: "#2a2aa5",
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
                </TouchableOpacity> */}

                {/* <View>
                    <Text style={{
                            fontSize: 12,
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >Or continue with</Text>
                </View> */}

            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
});

export default AccountScreen;
