import React from 'react';
import {View, ImageBackground, Image, FlatList, Text} from 'react-native';

import fondo from '../../Images/fondo.png';
import ganado from '../../Images/ganado.png';
import pollos from '../../Images/pollos.png';
import peces from '../../Images/peces.png';
import logoColegio from '../../Images/escudovilla.png';
import ondas from '../../Images/ondas.png';
import styles from './styles';
import ItemList from './components/itemList';
const {
  centrado,
  contenedor,
  viewLogos,
  viewlogos,
  logosInf,
  logoIzq,
  baner,
} = styles;
const Home = (props) => {
  const homeData = [
    {icon: ganado, title: 'Ganado'},
    {icon: peces, title: 'Peces'},
    {icon: pollos, title: 'Pollos'},
  ];
  const renderItem = ({item}) => <ItemList {...item} />;
  const keyExtractor = (item, index) => index + item.title;
  const colegio = 'Institución Educativa\nJosé Odel Lizarazo Villamaga';
  return (
    <ImageBackground
      source={fondo}
      resizeMode="stretch"
      style={[styles.container, centrado]}>
      <Image
        source={ondas}
        resizeMode={'contain'}
        style={[styles.logosInf, styles.logoOndas]}
      />
      <View style={contenedor}>
        <FlatList
          data={homeData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          scrollEnabled={false}
        />
      </View>
      <View style={viewlogos}>
        <View style={viewLogos}>
          <Image source={logoColegio} style={[logosInf, styles.logoIzq]} />
          <View style={styles.titleSchool}>
            <Text style={styles.textSchool}>{colegio}</Text>
          </View>
        </View>
        <Image source={require('../../Images/baner.png')} style={baner} />
      </View>
    </ImageBackground>
  );
};

export default Home;
