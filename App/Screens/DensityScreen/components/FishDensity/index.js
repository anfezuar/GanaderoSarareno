import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import styles from './styles';
function FishDensity({fish, area}) {
  const title = 'Cantidad de peces a sembrar en esta área';
  const titleSystem = 'En un sistema semiintensivo o tradicional';
  const nameFish = ['Cachama', 'Tilapia Roja', 'Bocachico'];

  const titleArea = 'Área del estanque';
  const titleFishType = 'Escoja la especie que desea producir';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const fishSelected = () => {
    switch (selectedIndex) {
      case 0:
        return fish.cachama;
      case 1:
        return fish.tilapiaRoja;
      default:
        return fish.bocachico;
    }
  };
  return (
    <View>
      <Text style={[styles.titleResult, styles.resultContainer]}>
        {titleFishType}
      </Text>
      <SegmentedControl
        values={nameFish}
        selectedIndex={selectedIndex}
        onChange={(event) =>
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
        }
      />
      <Text style={styles.titleResult}>{titleArea}</Text>
      <Text style={styles.textResult}>
        {`${area} m`}
        <Text style={styles.textExponente}>{2}</Text>
      </Text>
      <Text style={styles.titleResult}>{title}</Text>
      <Text style={[styles.textResult]}>{`${fishSelected()} Peces`}</Text>
      <Text style={[styles.titleResult, styles.textLast]}>{titleSystem}</Text>
    </View>
  );
}

export default FishDensity;
