import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Header({title}) {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack(null);
  return (
    <View style={styles.header}>
      <Icon name="chevron-back" style={styles.iconoBack} onPress={goBack} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;
