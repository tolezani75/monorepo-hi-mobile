import { Dimensions, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const DeviceWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isIphoneX() ? 40 : 17,
  },

  header: {
    width: DeviceWidth,
    padding: 20,
    flexDirection: 'row',
  },

  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#232',
  },

  containerText: {
    width: DeviceWidth,
    maxWidth: 280,
    marginLeft: 20,
  },

  nameUser: {
    fontSize: 17,
    fontWeight: '900',
    color: '#333',
  },

  premium: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
  },

  containerContent: {
    flex: 1,
  },

  content: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginVertical: 30,
    height: 30,
  },

  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    marginRight: 20,
    borderWidth: 1,
  },

  textContent: {
    marginRight: 7,
  },
});
