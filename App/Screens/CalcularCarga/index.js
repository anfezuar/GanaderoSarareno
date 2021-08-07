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

import ApplicationStyles from '../../Themes/ApplicationStyles';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

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

  /* calcularCarga = () => {
    const {animales, peso, materiaSeca} = this.state;
    var pesoTotal = peso * animales;
    var carga = pesoTotal / materiaSeca;
    carga = Math.round(carga);
    this.setState({
      cargaCalculada: true,
      carga: carga,
    });
  }; */

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
      animalesString,
      pesoString,
    } = this.state;
    const {
      container,
      iconoBack,
      textInput,
      button,
      textButton,
      header,
    } = ApplicationStyles;
    return (
      <KeyboardAvoidingView style={container}>
        <ScrollView>
          <View style={[header]}>
            <Icon
              name="chevron-back"
              style={iconoBack}
              onPress={() => {
                this.props.navigation.goBack(null);
              }}
            />
            <View style={{alignSelf: 'center'}}>
              <Text style={ApplicationStyles.titulo}>Calcular Carga</Text>
            </View>
          </View>
          <Text style={styles.texto}>
            Agregue el valor en gramos obtenido de la medición de los 20 marcos
            (No usar ni puntos ni comas y solo valores enteros):
          </Text>
          <TextInput
            style={textInput}
            onChangeText={(text) => {
              this.onAforoChange(text);
            }}
            value={aforoString}
            autoCompleteType="cc-number"
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={[button, styles.botones]}
            onPress={this.calcularMateriaSeca}>
            <Text style={textButton}>Calcular Materia Seca</Text>
          </TouchableOpacity>
          {materiaCalculada && (
            <View style={container}>
              <Text style={styles.texto}>La materia seca disponible es:</Text>
              <Text style={[styles.texto, styles.textoCarga]}>
                {materiaSecaString} Kg
              </Text>
              {/* <Text style={[styles.texto, {marginTop: 20}]}>
                Ahora para calcular carga ingrese los siguientes datos:
              </Text> */}
              {/* <Text style={[styles.texto, {marginTop: 10}]}>
                1. Número de bovinos que van a ingresar en los potreros:
              </Text>
              <TextInput
                style={textInput}
                onChangeText={(text) => {
                  this.onAnimalesChange(text);
                }}
                value={animalesString}
                autoCompleteType="cc-number"
                keyboardType="number-pad"
              /> */}
              <Text style={[styles.texto, {marginTop: 10}]}>
                Agregue el peso promedio de los bovinos que van a ingresar a los
                potreros (Promedio en kilogramos, sin puntos ni comas):
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
              <TouchableOpacity
                style={[button, styles.botones]}
                onPress={this.calcularCarga}>
                <Text style={textButton}>Calcular Carga Animal</Text>
              </TouchableOpacity>
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
    );
  }
}
