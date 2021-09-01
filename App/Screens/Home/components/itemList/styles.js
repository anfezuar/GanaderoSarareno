import {StyleSheet} from 'react-native';

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
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginHorizontal: 20,
    marginVertical: 20,
    marginRight: 30,
  },
  textStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fcac5c',
  },
});
