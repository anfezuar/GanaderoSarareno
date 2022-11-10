import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CommonScreen from '../../components/CommonScreen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import FishFood from '../FoodScreen/FishFood';
import ChickenFood from '../FoodScreen/ChickenFood';
import {getProtein, getBiomasa} from '../FoodScreen/FishFood/constants';
import {getConsumption} from '../FoodScreen/ChickenFood/constants';

import styles from './styles';

function EggsScreen() {
  const route = useRoute();
  const title = route.params.title;
  const titleResult = 'Porcentaje de postura';
  const observationTitle = 'Observaciones';
  const observationBajo =
    'Es necesario revisar edad, estado sanitario y manejo del lote';
  const observationOptimo =
    'Recuerde el mantenimiento de temperatura y adecuado plan de alimentación de las aves';
  const [eggs, setEggs] = useState('');
  const [animals, setAnimals] = useState('');
  const [result, setResult] = useState('');
  const [hasResult, setHasResult] = useState(false);
  const handleCalculate = () => {
    setHasResult(true);
    setResult((eggs * 100) / animals);
  };
  const handleTapOut = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={handleTapOut} style={styles.container}>
      <CommonScreen title={title}>
        <View style={styles.content}>
          <View style={styles.formStyle}>
            <CustomTextInput
              label={'Número de gallinas en el galpón'}
              value={animals}
              onChangeText={setAnimals}
              keyboardType={'number-pad'}
            />
            <CustomTextInput
              label={'Cantidad de huevos diarios'}
              value={eggs}
              onChangeText={setEggs}
              keyboardType={'number-pad'}
            />
            {hasResult && (
              <View>
                <Text style={styles.titleScreen}>{titleResult}</Text>
                <Text style={styles.textResult}>
                  {Number(result).toFixed(2) + ' %'}
                </Text>
                <Text
                  style={[
                    styles.textResult,
                    result < 90 && styles.textResultDown,
                  ]}>
                  {result > 90 ? 'OPTIMO' : 'BAJO'}
                </Text>
                <Text style={styles.titleScreen}>{observationTitle}</Text>
                <Text style={styles.titleScreen}>
                  {result > 90 ? observationOptimo : observationBajo}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.buttonStyle}>
            <CustomButton title={'Calcular'} onPress={handleCalculate} />
          </View>
        </View>
      </CommonScreen>
    </TouchableWithoutFeedback>
  );
}

export default EggsScreen;
