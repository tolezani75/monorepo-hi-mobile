import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Auth/Welcome';
import Login from '../pages/Auth/SignIn';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Welcome} />
      <Stack.Screen name="Notifications" component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
