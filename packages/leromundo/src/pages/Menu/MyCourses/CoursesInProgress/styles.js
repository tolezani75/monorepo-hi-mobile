import { Dimensions, StyleSheet } from 'react-native';

export const PosterWidth = Dimensions.get('window').width / 3;
export const DetailsWidth = Dimensions.get('window').width / 2;
const ScreenWidth = Dimensions.get('screen').width;

import colors from '~/styles/colors';

export const Styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.primaryColor,
    width: ScreenWidth,
  },
});
