import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';

const SexInput = ({ label, value, setValue, placeholder }) => {
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
            <Picker.Item label="Other" value="other" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          
        </Picker>
      </View>
    </View>
  );
};

export default SexInput;
