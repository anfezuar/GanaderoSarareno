import React from 'react';
import {View, Text} from 'react-native';

import {titleAliment, observations, titleObservations} from './constants';
import styles from './styles';
function ChickenFood({aliment}) {
  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={styles.titleResult}>{titleAliment}</Text>
        <Text style={styles.resultAliment}>{`${aliment.toFixed(2)} Kg`}</Text>
      </View>
      <View>
        <Text style={styles.titleObservationsStyle}>{titleObservations}</Text>
        <Text>{observations}</Text>
      </View>
    </View>
  );
}

export default ChickenFood;
