import React from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './styles';

function CustomTextInput({
  label,
  labelStyle = {},
  textInputStyle = {},
  ...props
}) {
  return (
    <View>
      <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      <TextInput style={[styles.textInputStyle, textInputStyle]} {...props} />
    </View>
  );
}

export default CustomTextInput;
