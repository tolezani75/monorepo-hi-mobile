import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import React from 'react';

import AppProvider from '@monorepo-hi-mobile/shared/context';

import RootNavigator from './src/navigation/routes';

enableScreens();

const App = () => (
  <AppProvider>
    <RootNavigator />
  </AppProvider>
);

export default App;
