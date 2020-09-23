import {StyleSheet, Dimensions} from 'react-native';

const WidthScreen = Dimensions.get('window').width;
const HeightScreen = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 17,
  },

  image: {
    width: WidthScreen,
    height: HeightScreen,
  },
});
