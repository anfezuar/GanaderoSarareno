import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';

import ApplicationStyles from '../../Themes/ApplicationStyles';

function SubMenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Header title={route.params.title} />
      <View>
        <TouchableOpacity
          style={[ApplicationStyles.button]}
          onPress={() => {
            navigation.navigate('Video');
          }}>
          <Text style={ApplicationStyles.textButton}>
            Aprende a Realizar el Aforo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ApplicationStyles.button]}
          onPress={() => {
            navigation.navigate('CalcularCarga');
          }}>
          <Text style={ApplicationStyles.textButton}>
            Calcular Carga Animal
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SubMenuScreen;
