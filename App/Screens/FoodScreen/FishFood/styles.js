import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  resultContainer: {
    paddingTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  titleResult: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  rightContainer: {
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    paddingLeft: 5,
  },
  titleObservationsStyle: {
    paddingVertical: 10,
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  allTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingBottom: 10,
  },
});
