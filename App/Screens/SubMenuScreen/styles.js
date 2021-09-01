import {StyleSheet} from 'react-native';

const ICON_SIZE = 90;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  content: {
    margin: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
    borderRadius: 10,
  },
  subMenuButton: {
    height: 50,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 40,
  },
});
