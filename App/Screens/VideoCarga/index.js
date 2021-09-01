import React from 'react';
import {View, Text} from 'react-native';
import CommonScreen from '../../components/CommonScreen';

import styles from './styles';

import Video from 'react-native-video';

export default function VideoCarga(props) {
  const {backgroundVideo, textoDir, panelTexto} = styles;
  return (
    <CommonScreen title={'Calcular Carga'}>
      <Video
        source={require('../../Images/video.mp4')}
        controls={true}
        resizeMode="contain"
        style={backgroundVideo}
      />
      <View style={panelTexto}>
        <Text style={textoDir}>Como calcular la carga animal.</Text>
      </View>
    </CommonScreen>
  );
}
