import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
function FishDensity({fish, area}) {
  const title =
    'Cantidad aproximada de peces que se puede sembrar en esta área';
  const titleSpecies = 'Especie a sembrar';
  const titleSystem = 'Sistema semiintensivo o tradicional';
  const nameFish = ['Cachama', 'Tilapia Roja', 'Bocachico'];

  const titleArea = 'Área del estanque';
  return (
    <View>
      <Text style={styles.titleResult}>{titleArea}</Text>
      <Text style={styles.textResult}>
        {`${area} m`}
        <Text style={styles.textExponente}>{2}</Text>
      </Text>
      <Text>{title}</Text>
      <View style={styles.tableStyle}>
        <View style={styles.colunm}>
          <Text style={styles.titleRow}>{titleSpecies}</Text>
          <Text style={styles.cellStyle}>{nameFish[0]}</Text>
          <Text style={styles.cellStyle}>{nameFish[1]}</Text>
          <Text style={styles.cellStyle}>{nameFish[2]}</Text>
        </View>
        <View style={styles.colunm}>
          <Text style={[styles.titleRow, styles.cellRight]}>{titleSystem}</Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {fish.cachama}
          </Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {fish.tilapiaRoja}
          </Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {fish.bocachico}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FishDensity;
