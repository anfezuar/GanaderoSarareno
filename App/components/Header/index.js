import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Header({title, headerStyle}) {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack(null);
  return (
    <View style={[styles.header, headerStyle]}>
      <Icon
        name="chevron-back"
        style={styles.iconoBack}
        onPress={goBack}
        color="#E4A956"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;
