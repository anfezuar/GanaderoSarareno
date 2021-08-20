import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
function ItemList({icon, title}) {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate('SubMenuScreen', {icon, title});
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={icon} resizeMode={'contain'} style={styles.iconStyle} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ItemList;
