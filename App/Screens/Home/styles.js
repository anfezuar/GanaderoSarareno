import {StyleSheet} from 'react-native';

import {scale} from '../../utils/scalingUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor: {
    height: '50%',
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 30,
    borderRadius: 8,
    marginBottom: -50,
  },
  buttonHome: {
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
  },
  baner: {
    height: 40,
    width: null,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  logosInf: {
    height: scale(50),
    width: scale(60),
  },
  logoCol: {
    height: scale(40),
    width: scale(40),
  },
  logoOndas: {
    height: 70,
    width: 90,
    marginTop: 35,
    marginBottom: -50,
    alignSelf: 'center',
  },
  logoIzq: {
    left: 20,
  },
  logoDer: {
    right: 30,
  },
  viewLogos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  centrado: {
    justifyContent: 'center',
  },
  viewlogos: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleSchool: {
    width: '80%',
    alignItems: 'center',
  },
  textSchool: {
    fontSize: scale(12),
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
