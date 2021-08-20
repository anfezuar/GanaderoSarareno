import React from 'react';
import {ImageBackground} from 'react-native';
import Header from '../../components/Header';
import imageBg from '../../Images/bg.jpg';

import styles from './styles';

function CommonScreen({children, title}) {
  return (
    <ImageBackground style={styles.container} source={imageBg}>
      <Header title={title} />
      {children}
    </ImageBackground>
  );
}

export default CommonScreen;
