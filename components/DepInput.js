import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';

const DepInput = ({ label, value, setValue, placeholder }) => {
  return (
    <View style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
      <View style={{
            paddingHorizontal: 5,
            paddingVertical: 3,
        }}>
        <Text style={{ 
            fontSize: 15, 
            color: 'white', 
            //fontWeight: "bold" 
            
        }}>{label}</Text>
        </View>

      <View
        style={{
          backgroundColor: "#e7e7e7",
          borderRadius: 10,
          padding: 0,
          marginBottom: 10
        }}
      >
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}
          style={{ flex: 1 }}
        >
          <Picker.Item label="Select your department" value="other" />
          <Picker.Item label="College of Dentistry" value="College of Dentistry" />
          <Picker.Item label="School of Optometry" value="School of Optometry" />
          <Picker.Item label="School of Health Sciences" value="School of Health Sciences" />
          <Picker.Item label="School of Accountancy and Management" value="School of Accountancy and Management" />
          <Picker.Item label="School of Information Technology" value="School of Information Technology" />
          <Picker.Item label="School of Arts and Sciences" value="School of Arts and Sciences" />
          <Picker.Item label="School of Architecture" value="School of Architecture" />
          <Picker.Item label="Senior High School Department" value="Senior High School Department" />
        </Picker>
      </View>
    </View>
  );
};

export default DepInput;
