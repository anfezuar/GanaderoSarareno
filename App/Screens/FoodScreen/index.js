import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CommonScreen from '../../components/CommonScreen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import styles from './styles';
import FishFood from './FishFood';
import ChickenFood from './ChickenFood';
import {getProtein, getBiomasa} from './FishFood/constants';
import {getConsumption} from './ChickenFood/constants';

function FoodScreen() {
  const route = useRoute();
  const title = route.params.title;
  const [weight, setWeight] = useState('');
  const [animals, setAnimals] = useState('');
  const [protein, setProtein] = useState('%');
  const [fishAliment, setFishAliment] = useState('');
  const [chickenAliment, setChickenAliment] = useState('');
  const [hasResult, setHasResult] = useState(false);
  const handleCalculate = () => {
    setHasResult(true);
    if (title === 'Peces') {
      setProtein(getProtein(weight));
      const biomasa = getBiomasa(weight);
      const totalAliment = (biomasa * animals) / 1000;
      setFishAliment(totalAliment);
    } else {
      const totalAliment = (getConsumption(weight) * animals) / 1000;
      setChickenAliment(totalAliment);
    }
  };
  const handleTapOut = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={handleTapOut} style={styles.container}>
      <CommonScreen title={title}>
        <View style={styles.content}>
          <View style={styles.formStyle}>
            <CustomTextInput
              label={
                title === 'Peces'
                  ? 'Cantidad de peces a alimentar'
                  : 'Cantidad de pollos'
              }
              value={animals}
              onChangeText={setAnimals}
              keyboardType={'number-pad'}
            />
            <CustomTextInput
              label={
                title === 'Peces'
                  ? 'Peso promedio de los peces (gramos)'
                  : 'Peso promedio de las aves (gramos)'
              }
              value={weight}
              onChangeText={setWeight}
              keyboardType={'number-pad'}
            />
            {hasResult &&
              (title === 'Peces' ? (
                <FishFood protein={protein} aliment={fishAliment} />
              ) : (
                <ChickenFood aliment={chickenAliment} />
              ))}
          </View>
          <View style={styles.buttonStyle}>
            <CustomButton title={'Calcular'} onPress={handleCalculate} />
          </View>
        </View>
      </CommonScreen>
    </TouchableWithoutFeedback>
  );
}

export default FoodScreen;
