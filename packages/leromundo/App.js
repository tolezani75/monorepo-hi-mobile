import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';

import '@monorepo-hi-mobile/shared/config/reactotron';

import {store} from '@monorepo-hi-mobile/shared/store';

import Home from '~/pages/Home';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
};

export default App;
