import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

function CustomButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#02BA6C', '#03864E', '#015B35']}
        style={styles.linearGradient}>
        <Text style={styles.textButton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CustomButton;
