import React from 'react';
import { View } from 'react-native';
import { NUColor2, NUColor3 } from './Constants';

const LineBreak = () => {
  return (
    <View
      style={{
        borderBottomColor: NUColor3,
        marginVertical: 20,
        borderBottomWidth: 2,
        marginVertical: 10,
      }}
    />
  );
};

export default LineBreak;
