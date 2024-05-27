import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const BdayInput = ({ label, value, setValue, placeholder }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setValue(moment(date).format('YYYY-MM-DD'));
  };

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
          padding: 15,
          marginBottom: 10
        }}
      >
        <TouchableOpacity onPress={showDatePicker}>
          <Text>{value ? moment(value).format('YYYY-MM-DD') : placeholder}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default BdayInput;
