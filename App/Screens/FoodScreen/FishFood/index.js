import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {
  titleProtein,
  titleAliment,
  titleObservations,
  observations,
} from './constants';

function FishFood({protein, aliment}) {
  return (
    <View>
      <View style={styles.resultContainer}>
        <View style={styles.allTextContainer}>
          <Text style={styles.titleResult}>{titleAliment}</Text>
          <Text style={styles.resultAliment}>{`${aliment} Kg`}</Text>
        </View>
        <View style={[styles.allTextContainer]}>
          <Text style={styles.titleResult}>{`${titleProtein} ${protein}`}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.titleObservationsStyle}>{titleObservations}</Text>
        <Text>{observations}</Text>
      </View>
    </View>
  );
}

export default FishFood;
