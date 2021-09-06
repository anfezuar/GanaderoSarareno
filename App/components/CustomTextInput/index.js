import React from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './styles';

function CustomTextInput({
  label,
  labelStyle = {},
  textInputStyle = {},
  styleContainer = {},
  ...props
}) {
  return (
    <View style={styleContainer}>
      <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      <TextInput style={[styles.textInputStyle, textInputStyle]} {...props} />
    </View>
  );
}

export default CustomTextInput;
