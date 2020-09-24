import {StyleSheet, Dimensions} from 'react-native';

const HeightScreen = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  banner: {
    height: HeightScreen - 300,
  },

  logoOnBanner: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: 10,
    right: 0,
    bottom: 0,
    left: 10,
  },
});
