import {StyleSheet} from 'react-native';

import {scale} from '../../../../utils/scalingUtils';

const ICON_SIZE = 90;

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#797979',
    alignItems: 'center',
  },
  iconStyle: {
    width: scale(ICON_SIZE),
    height: scale(ICON_SIZE),
    margin: 20,
  },
  textStyle: {
    fontSize: scale(35),
    fontWeight: 'bold',
    color: '#fcac5c',
  },
});
