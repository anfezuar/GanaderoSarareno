import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  iconoBack: {
    position: 'absolute',
    top: 14,
    left: 0,
    fontSize: 40,
    width: 50,
  },
  header: {
    marginTop: 0,
    height: 70,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    // borderBottomWidth: 1,
    // borderBottomColor: '#717171',
    // backgroundColor: 'white',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 14,
    color: 'white',
  },
  titleContainer: {
    alignSelf: 'center',
  },
});
