import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import HomeComponent from '../../pages/Home';

import colors from '../../styles/colors';

const Home = createNativeStackNavigator();

const HomeRoutes = () => (
  <Home.Navigator>
    <Home.Screen
      options={{
        headerShown: false,
      }}
      name="Home"
      component={HomeComponent}
    />
  </Home.Navigator>
);

export default HomeRoutes;
