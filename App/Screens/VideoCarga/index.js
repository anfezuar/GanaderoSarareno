import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';

import styles from './styles';
import ApplicationStyles from '../../Themes/ApplicationStyles';

import Video from 'react-native-video';

export default function VideoCarga(props) {
  const {backgroundVideo, textoDir, panelTexto} = styles;
  return (
    <View style={ApplicationStyles.container}>
      <Header title={'Calcular Carga'} />
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
