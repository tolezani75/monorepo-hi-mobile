import { Dimensions, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const PosterWidth = Dimensions.get('window').width / 3;
export const DetailsWidth = Dimensions.get('window').width / 2;
const ScreenWidth = Dimensions.get('screen').width;

import colors from '~/styles/colors';

export const Styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.primaryColor,
    width: ScreenWidth,
  },

  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: ScreenWidth - 100,
    marginTop: isIphoneX() ? 50 : 30,
  },

  title: {
    color: colors.defaultTextColor,
    fontWeight: 'regular',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
  },
});
