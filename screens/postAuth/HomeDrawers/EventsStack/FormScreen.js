import { 
    Dimensions, 
    View, Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
    Alert,
} from "react-native";

import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PasswordInput } from "../../../../components/PasswordInput";
import { NUColor1, NUColor2, NUColor3 } from "../../../../components/Constants";
import { StandardInput } from "../../../../components/StandardInput";
import SexInput from "../../../../components/SexInput";
import BdayInput from "../../../../components/BdayInput";
import CourseInput from "../../../../components/CourseInput";
import LevelInput from "../../../../components/LevelInput";
import LineBreak from "../../../../components/LineBreak";


const { height } = Dimensions.get("window");

const FormScreen =({navigation})=>{   
    const [fname, setFname] =useState('');
    const [lname, setLname] =useState('');
    const [theId, setTheId] = useState('');
    const [sex, setSex] =useState('');
    const [bday, setBday] =useState('');
    const [course, setCourse] =useState('');
    const [ylevel, setYlevel] =useState('');

    const [phone, setPhone] =useState('');

    const goSubmit = () => {
        Alert.alert('Submission Status', 'Successfully submitted!')
        navigation.goBack();
      };
      

    const goCancel = () => {
        navigation.goBack();
      };
      

    return(
        <SafeAreaView>
            <ScrollView>
            <View 
            style={{
                padding: 20,
                backgroundColor: NUColor1
            }}>
                <View style={{
                    alignItems: "center",
                    marginVertical: 0,
                }}>
                    <Text 
                    style={{
                        fontSize: 40,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: NUColor3,
                        marginTop: 0,
                    }}>
                        Registration</Text>

                    <Text 
                    style={{
                        marginHorizontal: 80,
                        fontSize: 15,
                        textAlign: "center",
                        color: 'white',
                        marginTop: 0,
                    }}>
                        Please fill out the form to participate.</Text>
                </View>

                <LineBreak/>

                <View 
                style={{
                    marginVertical: 5,
                }}>


                    <StandardInput
                    label = "First Name"
                    value={fname}
                    setValue={setFname}
                    />

                    <StandardInput
                    label = "Last Name"
                    value={lname}
                    setValue={setLname}
                    />

                    <StandardInput
                    label = "ID Number"
                    value={theId}
                    setValue={setTheId}
                    />

                    <SexInput
                    label = "Sex"
                    value={sex}
                    setValue={setSex}
                    />

                    <BdayInput
                            label="Birthday"
                            value={bday}
                            setValue={setBday}
                            placeholder="--/--/----"
                        />

                    <CourseInput
                    label="Course"
                    value={course}
                    setValue={setCourse}
                    placeholder="----/--/--"
                    />

                    <LevelInput
                    label="Year Level"
                    value={ylevel}
                    setValue={setYlevel}
                    placeholder="---"
                    />

                    {/* phone */}
                    <StandardInput
                    label = "Phone"
                    value={phone}
                    setValue={setPhone}
                    />

                    <LineBreak/>

                <TouchableOpacity 
                onPress={goSubmit}
                style={{
                    backgroundColor: NUColor3,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginVertical: 20,
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    >Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={goCancel}
                style={{
                    paddingVertical: 0,
                    borderRadius: 10,
                    marginVertical: 20,
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: "grey",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    >Cancel</Text>
                </TouchableOpacity>

                </View>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  });

export default FormScreen;