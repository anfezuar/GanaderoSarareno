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
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    height: 40,
    borderTopWidth: 1,
    ...COMMON_STYLE,
  },
  cellRight: {
    borderRightWidth: 1,
    borderColor: '#717171',
  },
  cellStyle: {
    height: 42,
    ...COMMON_STYLE,
  },
  titleResult: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center',
  },
  textResult: {
    fontSize: 40,
    textAlign: 'center',
    color: '#015B35',
    paddingBottom: 10,
  },
  textExponente: {
    fontSize: 20,
  },
});
