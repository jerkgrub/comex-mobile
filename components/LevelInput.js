import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const LevelInput = ({ label, value, setValue }) => {
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
          <Picker.Item label="1st Year" value="1st Year" />
          <Picker.Item label="2nd Year" value="2nd Year" />
          <Picker.Item label="3rd Year" value="3rd Year" />
          <Picker.Item label="4th Year" value="4th Year" />
        </Picker>
      </View>
    </View>
  );
};

export default LevelInput;
