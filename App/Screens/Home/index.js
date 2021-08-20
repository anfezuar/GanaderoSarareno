import React from 'react';
import {View, ImageBackground, Image, FlatList} from 'react-native';

import vaca from '../../Images/vaca.png';
import pollo from '../../Images/pollo.png';
import pescado from '../../Images/pescado.png';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import styles from './styles';
import ItemList from './components/itemList';
const {
  centrado,
  contenedor,
  logo,
  viewLogos,
  viewlogos,
  logosInf,
  logoIzq,
  logoDer,
  baner,
} = styles;
const Home = (props) => {
  const homeData = [
    {icon: vaca, title: 'Ganado'},
    {icon: pescado, title: 'Peces'},
    {icon: pollo, title: 'Pollos'},
  ];
  const renderItem = ({item}) => <ItemList {...item} />;
  const keyExtractor = (item, index) => index + item.title;
  return (
    <ImageBackground
      source={require('../../Images/fondo.jpg')}
      style={[ApplicationStyles.container, centrado]}>
      <View style={contenedor}>
        <Image source={require('../../Images/logo.png')} style={logo} />
        <FlatList
          data={homeData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
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
