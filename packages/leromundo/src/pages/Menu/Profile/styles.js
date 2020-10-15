import {Dimensions, StyleSheet} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

import colors from '../../../styles/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  },

  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#232',
  },

  containerCountCourses: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  countCourses: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },

  containerContentUser: {
    width: DeviceWidth,
    backgroundColor: colors.containerColor,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },

  contentUser: {
    marginVertical: 16,
  },

  input: {
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    borderBottomColor: colors.defaultLabelColor,
    width: DeviceWidth - 50,
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
