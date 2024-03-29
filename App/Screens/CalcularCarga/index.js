/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import CommonScreen from '../../components/CommonScreen';
import CustomButton from '../../components/CustomButton';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import styles from './styles';
import {headerText, materiaText} from './constants';

export default class calcularCarga extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      aforo: 0,
      aforoString: '',
      materiaCalculada: false,
      materiaSecaString: '',
      animales: 0,
      animalesString: '',
      peso: 0,
      pesoString: '',
      cargaCalculada: false,
      carga: '',
      materiaSeca: 0,
      loading: false,
      calculandoMateria: false,
      calgulandoCarga: false,
    };
  }

  onAforoChange = (text) => {
    this.setState({
      aforoString: text,
      aforo: parseInt(text, 10),
    });
  };

  onAnimalesChange = (text) => {
    this.setState({
      animalesString: text,
      animales: parseInt(text, 10),
    });
  };

  onPesoChange = (text) => {
    this.setState({
      pesoString: text,
      peso: parseInt(text, 10),
    });
  };

  /*

  */

  calcularMateriaSeca = () => {
    const {aforo} = this.state;
    var materia = ((aforo / 20) * 10000) / 1000;
    materia = (materia * 20) / 100;
    var perdida = (materia * 20) / 100;
    var materiaTotal = materia - perdida;
    //var materiaTotal = materia;
    var materiaString = this.formatNumber(Math.round(materiaTotal));
    this.setState({
      materiaCalculada: true,
      materiaSeca: Math.round(materiaTotal),
      materiaSecaString: materiaString.toString(),
    });
  };

  calcularCarga = () => {
    const {peso, materiaSeca} = this.state;
    var pesoTotal = (peso * 4) / 100;
    var carga = materiaSeca / pesoTotal;
    carga = Math.round(carga);
    this.setState({
      cargaCalculada: true,
      carga: carga,
    });
  };

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  render() {
    const {
      aforoString,
      materiaSecaString,
      materiaCalculada,
      cargaCalculada,
      carga,
      pesoString,
    } = this.state;
    const {container, textInput, button, textButton} = ApplicationStyles;

    return (
      <CommonScreen title={'Calcular Carga'}>
        <KeyboardAvoidingView style={container}>
          <ScrollView style={styles.content}>
            <Text style={styles.texto}>{headerText}</Text>
            <TextInput
              style={textInput}
              onChangeText={(text) => {
                this.onAforoChange(text);
              }}
              value={aforoString}
              autoCompleteType="cc-number"
              keyboardType="number-pad"
            />
            <CustomButton
              title={'Calcular Materia Seca'}
              onPress={this.calcularMateriaSeca}
              buttonStyle={styles.botones}
            />
            {materiaCalculada && (
              <View style={container}>
                <Text style={styles.texto}>La materia seca disponible es:</Text>
                <Text style={[styles.texto, styles.textoCarga]}>
                  {materiaSecaString} Kg
                </Text>
                <Text style={[styles.texto, {marginTop: 10}]}>
                  {materiaText}
                </Text>
                <TextInput
                  style={textInput}
                  onChangeText={(text) => {
                    this.onPesoChange(text);
                  }}
                  value={pesoString}
                  autoCompleteType="cc-number"
                  keyboardType="number-pad"
                />
                <CustomButton
                  title={'Calcular Carga Animal'}
                  onPress={this.calcularCarga}
                  buttonStyle={styles.botones}
                />
              </View>
            )}
            {cargaCalculada && (
              <View style={[container, {marginBottom: 20}]}>
                <Text style={styles.texto}>
                  La carga total por hectárea es de:
                </Text>
                <Text style={[styles.texto, styles.textoCarga]}>
                  {carga} bovinos por hectárea
                </Text>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </CommonScreen>
    );
  }
}
