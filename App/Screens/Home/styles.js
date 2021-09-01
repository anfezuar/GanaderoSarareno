import {StyleSheet} from 'react-native';

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
    height: 60,
    width: null,
    marginBottom: 5,
  },
  logosInf: {
    height: 50,
    width: 60,
    // position: 'absolute',
    // bottom: 0,
  },
  logoIzq: {
    left: 30,
  },
  logoDer: {
    right: 30,
  },
  viewLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
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
    //left: 100,
    width: '80%',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingVertical: 10,
    // borderRadius: 10,
  },
  textSchool: {
    textAlign: 'center',
    color: '#E4A956',
  },
});
