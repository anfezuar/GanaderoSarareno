import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import styles from './styles';
function ChickenDensity({chickens, area}) {
  const title =
    'Cantidad aproximada de pollos que se pueden tener en esta área';
  const nameClimate = [
    'Frío\nMenos de 17 °C',
    'Templado\nEntre 17 y 24 °C',
    'Cálido\nMas de 24 °C',
  ];
  const titleArea = 'Área del estanque';
  const titleChickenType = 'Escoja el clima de la zona';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const chickenSelected = () => {
    switch (selectedIndex) {
      case 0:
        return chickens.cold;
      case 1:
        return chickens.tempered;
      default:
        return chickens.warm;
    }
  };
  return (
    <View>
      <Text style={[styles.titleResult, styles.resultContainer]}>
        {titleChickenType}
      </Text>
      <SegmentedControl
        values={nameClimate}
        selectedIndex={selectedIndex}
        onChange={(event) =>
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
        }
        style={styles.styleSegment}
      />
      <Text style={styles.titleResult}>{titleArea}</Text>
      <View style={styles.areaContainer}>
        <Text style={styles.textResult}>{`${area} m`}</Text>
        <Text style={styles.textExponente}>{2}</Text>
      </View>
      <Text style={styles.titleResult}>{title}</Text>
      <Text style={[styles.textResult]}>{`${chickenSelected()} Aves`}</Text>
    </View>
  );
}

export default ChickenDensity;
