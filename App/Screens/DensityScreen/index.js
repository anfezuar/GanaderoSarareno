import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomScreen from '../../components/CommonScreen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import FishDensity from './components/FishDensity';
import ChickenDensity from './components/ChickenDensity';
import HenDensity from './components/HenDensity';
import styles from './styles';

function DensityScreen() {
  const route = useRoute();
  const title = route.params.title;
  const [long, setLong] = useState('');
  const [width, setWidth] = useState('');
  const [hasResult, setHasResult] = useState(false);
  const [area, setArea] = useState('0');
  const [fish, setFish] = useState(null);
  const [chickens, setChickens] = useState(null);
  const [hens, setHens] = useState(null);
  const handleCalculate = () => {
    setHasResult(true);
    const totalArea = long * width;
    setFish({
      cachama: totalArea * 2.5,
      tilapiaRoja: totalArea * 3,
      bocachico: totalArea / 10,
    });
    setChickens({
      cold: totalArea * 10,
      tempered: totalArea * 8,
      warm: totalArea * 6,
    });
    setHens({
      cold: totalArea * 10,
      tempered: totalArea * 8,
      warm: totalArea * 6,
    });
    setArea(totalArea);
  };
  const getTitleFields = () =>
    title === 'Peces'
      ? 'Largo y ancho del estanque (metros)'
      : 'Largo y ancho del galpón (metros)';

  const getDensityScreen = () => {
    switch (title) {
      case 'Peces':
        return <FishDensity fish={fish} area={area} />;
      case 'Pollos':
        return <ChickenDensity chickens={chickens} area={area} />;
      case 'Gallinas':
        return <HenDensity hens={hens} area={area} />;
      default:
        break;
    }
  };
  return (
    <CustomScreen title={title}>
      <View style={styles.content}>
        <Text style={styles.titleScreen}>
          {title === 'Peces' ? 'Peces a sembrar' : 'Aves a alojar'}
        </Text>
        <Text style={styles.titleFields}>{getTitleFields()}</Text>
        <View style={styles.formStyle}>
          <CustomTextInput
            value={long}
            onChangeText={setLong}
            keyboardType={'number-pad'}
            placeholder="Largo"
            styleContainer={styles.inputStyle}
          />
          <CustomTextInput
            value={width}
            onChangeText={setWidth}
            keyboardType={'number-pad'}
            placeholder="Ancho"
            styleContainer={styles.inputStyle}
          />
        </View>
        {hasResult && getDensityScreen()}
        <View style={styles.buttonStyle}>
          <CustomButton title={'Calcular'} onPress={handleCalculate} />
        </View>
      </View>
    </CustomScreen>
  );
}

export default DensityScreen;
