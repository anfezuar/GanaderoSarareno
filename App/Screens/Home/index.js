import React from 'react';
import {View, ImageBackground, Image, FlatList, Text} from 'react-native';

import fondo from '../../Images/fondo.png';
import ganado from '../../Images/ganado.png';
import pollos from '../../Images/pollos.png';
import peces from '../../Images/peces.png';
import gallinas from '../../Images/gallinas.png';
import logoColegio from '../../Images/escudovilla.png';
import ondas from '../../Images/ondas.png';
import styles from './styles';
import ItemList from './components/itemList';

const {centrado, contenedor, viewLogos, viewlogos, logosInf, baner} = styles;
const Home = () => {
  const homeData = [
    {icon: ganado, title: 'Ganado'},
    {icon: peces, title: 'Peces'},
    {icon: pollos, title: 'Pollos'},
    {icon: gallinas, title: 'Gallinas'},
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
        style={[logosInf, styles.logoOndas]}
      />
      <View style={contenedor}>
        <FlatList
          key={'_'}
          data={homeData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </View>
      <View style={viewlogos}>
        <View style={viewLogos}>
          <Image
            source={logoColegio}
            style={[styles.logoCol, styles.logoIzq]}
          />
          <View style={styles.titleSchool}>
            <Text style={styles.textSchool}>{colegio}</Text>
          </View>
        </View>
        <Image source={require('../../Images/baner.jpg')} style={baner} />
      </View>
    </ImageBackground>
  );
};

export default Home;
