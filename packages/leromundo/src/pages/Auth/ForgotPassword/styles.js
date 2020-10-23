import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

  title: {
    color: colors.defaultTextColor,
    fontWeight: 'regular',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 5,
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
  },

  inputPassword: {
    height: Platform.OS === 'android' ? 40 : 32,
    color: colors.defaultTextColor,
    marginVertical: 5,
  },
});
