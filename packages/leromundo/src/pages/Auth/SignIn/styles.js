import { StyleSheet, Dimensions, Platform } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

import colors from '../../../styles/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerContent: {
    width: ScreenWidth,
    paddingHorizontal: 32,
    paddingVertical: 15,
  },

  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 200,
    width: 200,
    marginTop: Platform.OS === 'android' ? 22 : 30,
  },

  title: {
    color: colors.defaultTextColor,
    fontWeight: 'regular',
    fontSize: 12,
    fontWeight: '600',
  },

  label: {
    marginLeft: 10,
    marginVertical: 4,
    fontSize: 13,
    fontWeight: '600',
  },

  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    color: colors.defaultTextColor,
    justifyContent: 'space-between',
  },

  inputPassword: {
    height: Platform.OS === 'android' ? 40 : 32,
    color: colors.defaultTextColor,
    marginVertical: 5,
  },

  footer: {
    marginBottom: Platform.OS === 'android' ? 230 : 150,
  },
});
