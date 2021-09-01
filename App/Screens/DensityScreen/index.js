import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomScreen from '../../components/CommonScreen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import FishDensity from './components/FishDensity';
import ChickenDensity from './components/ChickenDensity';
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
    setArea(totalArea);
  };
  const titleArea = 'Área';
  return (
    <CustomScreen title={title}>
      <View style={styles.content}>
        <View style={styles.formStyle}>
          <CustomTextInput
            label={'Largo'}
            value={long}
            onChangeText={setLong}
            keyboardType={'number-pad'}
          />
          <CustomTextInput
            label={'Ancho'}
            value={width}
            onChangeText={setWidth}
            keyboardType={'number-pad'}
          />
          <Text style={styles.titleResult}>{titleArea}</Text>
          <Text style={styles.textResult}>{`${area} mt2`}</Text>
          {hasResult &&
            (title === 'Peces' ? (
              <FishDensity fish={fish} />
            ) : (
              <ChickenDensity chickens={chickens} />
            ))}
        </View>
        <View style={styles.buttonStyle}>
          <CustomButton title={'Calcular'} onPress={handleCalculate} />
        </View>
      </View>
    </CustomScreen>
  );
}

export default DensityScreen;
