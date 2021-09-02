import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
function ChickenDensity({chickens, area}) {
  const title =
    'Cantidad aproximada de pollos que se pueden alojar en esta area';
  const titleClimate = 'Clima';
  const titleBirds = 'Cantidad de aves';
  const nameClimate = [
    'Frio (Menos de 17 °C)',
    'Templado (Entre 17 y 24 °C)',
    'Calido (Mas de 24 °C)',
  ];
  const titleArea = 'Área del estanque';
  return (
    <View>
      <Text style={styles.titleResult}>{titleArea}</Text>
      <Text style={styles.textResult}>{`${area} m2`}</Text>
      <Text>{title}</Text>
      <View style={styles.tableStyle}>
        <View style={styles.colunm}>
          <Text style={styles.titleRow}>{titleClimate}</Text>
          <Text style={styles.cellStyle}>{nameClimate[0]}</Text>
          <Text style={styles.cellStyle}>{nameClimate[1]}</Text>
          <Text style={styles.cellStyle}>{nameClimate[2]}</Text>
        </View>
        <View style={styles.colunm}>
          <Text style={[styles.titleRow, styles.cellRight]}>{titleBirds}</Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {chickens.cold}
          </Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {chickens.tempered}
          </Text>
          <Text style={[styles.cellStyle, styles.cellRight]}>
            {chickens.warm}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ChickenDensity;
