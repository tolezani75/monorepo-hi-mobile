import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../styles/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'normal',
    fontSize: 14,
    color: colors.defaultTextColor,
  },

  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  pencil: {
    position: 'absolute',
    top: 0,
    left: 65,
  },

  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#232',
  },

  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
  },

  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    marginVertical: 5,
  },

  inputPassword: {
    height: 50,
    backgroundColor: '#fff',
    marginVertical: 5,
    flex: 1,
  },
});
