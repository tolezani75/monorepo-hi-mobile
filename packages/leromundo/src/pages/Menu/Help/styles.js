import { Dimensions, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import colors from '~/styles/colors';

const ScreenWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: isIphoneX() ? 20 : 0,
  },

  containerPriceTable: {
    width: ScreenWidth,
  },

  priceTable: {
    width: '95%',
    height: 300,
    resizeMode: 'contain',
  },

  title: {
    color: colors.defaultTextColor,
    fontWeight: 'regular',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    marginVertical: 30,
  },

  input: {
    fontSize: 24,
    marginVertical: 8,
    color: colors.defaultTextColor,
  },
});
