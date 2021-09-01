import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

function CustomButton({title, onPress, buttonStyle}) {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <LinearGradient
        colors={['#FDCA82', '#E4A956', '#C38227']}
        style={styles.linearGradient}>
        <Text style={styles.textButton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CustomButton;
