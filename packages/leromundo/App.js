import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/navigation/routes';

import Banner from '@monorepo-hi-mobile/shared/components/Banner';

import {setNavigator} from '@monorepo-hi-mobile/shared/services/navigation';

import {store} from '@monorepo-hi-mobile/shared/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
