import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './src/navigation/routes';

const App = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);

export default App;
