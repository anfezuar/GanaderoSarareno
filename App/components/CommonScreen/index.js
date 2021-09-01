import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

import styles from './styles';

function CommonScreen({children, title}) {
  return (
    <LinearGradient
      colors={['#000000', '#343434', '#ffffff']}
      style={styles.container}>
      <Header title={title} />
      {children}
    </LinearGradient>
  );
}

export default CommonScreen;
