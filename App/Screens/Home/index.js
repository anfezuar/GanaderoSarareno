import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import styles from './styles';
const {
  centrado,
  contenedor,
  logo,
  buttonHome,
  viewLogos,
  viewlogos,
  logosInf,
  logoIzq,
  logoDer,
  baner,
} = styles;
const Home = (props) => {
  return (
    <ImageBackground
      source={require('../../Images/fondo.jpg')}
      style={[ApplicationStyles.container, centrado]}>
      <View style={contenedor}>
        <Image source={require('../../Images/logo.png')} style={logo} />
        <TouchableOpacity
          style={[ApplicationStyles.button, buttonHome]}
          onPress={() => {
            props.navigation.navigate('Video');
          }}>
          <Text style={ApplicationStyles.textButton}>
            Aprende a Realizar el Aforo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ApplicationStyles.button, buttonHome]}
          onPress={() => {
            props.navigation.navigate('CalcularCarga');
          }}>
          <Text style={ApplicationStyles.textButton}>
            Calcular Carga Animal
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[ApplicationStyles.button, buttonHome]}
          onPress={() => {
            props.navigation.navigate('CalcularCarga');
          }}>
          <Text style={ApplicationStyles.textButton}>
            Conoce Más Sobre Calcular Carga Animal
          </Text>
        </TouchableOpacity> */}
      </View>
      <View style={viewlogos}>
        <View style={viewLogos}>
          <Image
            source={require('../../Images/logoagropecuaria.png')}
            style={[logosInf, logoIzq]}
          />
          <Image
            source={require('../../Images/escudovilla.png')}
            style={[logosInf, logoDer]}
          />
        </View>
        <Image source={require('../../Images/baner.png')} style={baner} />
      </View>
    </ImageBackground>
  );
};

export default Home;
