/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import Icon from 'react-native-vector-icons/Ionicons';

import Video from 'react-native-video';

export default function VideoCarga(props) {
  const {backgroundVideo, textoDir, panelTexto} = styles;
  const {container, iconoBack, header} = ApplicationStyles;
  return (
    <View style={container}>
      <View style={header}>
        <Icon
          name="chevron-back"
          style={iconoBack}
          onPress={() => {
            props.navigation.goBack(null);
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={ApplicationStyles.titulo}>Calcular Carga</Text>
        </View>
      </View>
      <Video
        source={require('../../Images/video.mp4')}
        controls={true}
        resizeMode="contain"
        style={backgroundVideo}
      />
      <View style={panelTexto}>
        <Text style={textoDir}>Como calcular la carga animal.</Text>
      </View>
    </View>
  );
}
