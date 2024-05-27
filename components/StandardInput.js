import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export const StandardInput = ({ label, value, setValue, placeholder }) => {

  return (
    <ScrollView>
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

    <View style={{ 
        backgroundColor: "#e7e7e7", 
        borderRadius: 10, 
        padding: 9,
        marginBottom: 10 }}>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={"#818181"}
        value={value}
        onChangeText={setValue}
        style={{
          flex: 1,
          fontSize: 15,
        }}
      />
    </View>
    </ScrollView>
  );
};