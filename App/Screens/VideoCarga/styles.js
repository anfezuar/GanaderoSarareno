import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fondo: {
    backgroundColor: '#000',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 80,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  textoDir: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'CaviarDreams',
    fontSize: 20,
  },
  panelTexto: {
    height: 60,
    justifyContent: 'center',
    paddingTop: 8,
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
