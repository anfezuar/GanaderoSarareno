import {StyleSheet} from 'react-native';

import {scale} from '../../../../utils/scalingUtils';

const ICON_SIZE = 90;

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#797979',
    alignItems: 'center',
  },
  iconStyle: {
    width: scale(ICON_SIZE),
    height: scale(ICON_SIZE),
    marginHorizontal: 20,
  },
  iconHen: {
    width: scale(40),
    height: scale(40),
    marginHorizontal: 50,
    marginVertical: 30,
    tintColor: '#fcac5c',
  },
  textStyle: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: '#fcac5c',
  },
});
