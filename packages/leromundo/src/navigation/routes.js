import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Auth from './modules/AuthNavigator';
import Home from './modules/HomeNavigator';

const {Navigator, Screen} = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          headerShown: false,
        }}
        name="Auth"
        component={Auth}
      />
    </Navigator>
  </NavigationContainer>
);

export default RootNavigator;
