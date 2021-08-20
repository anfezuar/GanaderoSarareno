import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CommonScreen from '../../components/CommonScreen';

import styles from './styles';

function FoodScreen() {
  const route = useRoute();
  const title = route.params.title;
  return (
    <CommonScreen title={title}>
      <View style={styles.content}>
        <Image
          source={route.params.icon}
          resizeMode={'contain'}
          style={styles.iconStyle}
        />
        <View>
          <Text>Peso Promedio</Text>
          <TextInput />
          <Text>Cantidad de animales a sembrar</Text>
          <TextInput />
        </View>
      </View>
    </CommonScreen>
  );
}

export default FoodScreen;
