import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const PasswordInput = ({ value, setValue, placeholder }) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: "#e7e7e7", 
        borderRadius: 10, 
        padding: 18,
        marginVertical: 10 }}>

      <TextInput 
        secureTextEntry={showPassword}
        placeholder={placeholder}
        placeholderTextColor={"#818181"}
        value={value}
        onChangeText={setValue}
        style={{
          flex: 1,
          fontSize: 15,
        }}
      />
      <TouchableOpacity 
        onPress={() => setShowPassword(!showPassword)}
        style={{
          justifyContent: 'center',
          paddingRight: 0,
        }}
      >
        <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#818181" />
      </TouchableOpacity>
    </View>
  );
};