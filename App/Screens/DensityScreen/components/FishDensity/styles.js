import {StyleSheet} from 'react-native';

const COMMON_STYLE = {
  borderColor: '#717171',
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  paddingVertical: 5,
  paddingHorizontal: 10,
};
export default StyleSheet.create({
  tableStyle: {
    flexDirection: 'row',
  },
  colunm: {
    width: '50%',
  },
  titleRow: {
    marginTop: 10,
    height: 50,
    borderTopWidth: 1,
    ...COMMON_STYLE,
  },
  cellRight: {
    borderRightWidth: 1,
    borderColor: '#717171',
  },
  cellStyle: {
    ...COMMON_STYLE,
  },
});
