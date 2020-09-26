import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppProvider from '@monorepo-hi-mobile/shared/context';

import RootNavigator from './src/navigation';

// LogBox.ignoreWarnings(['Animated: ']);
enableScreens();

const App = () => (
  <AppProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </AppProvider>
);

export default App;
