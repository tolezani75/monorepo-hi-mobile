import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },
});
