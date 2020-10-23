import { Dimensions, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const ScreenWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: ScreenWidth - 100,
    marginTop: isIphoneX() ? 20 : 0,
  },
});
