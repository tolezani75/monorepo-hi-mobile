import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Dashboard from '../pages/Home';

import colors from '../styles/colors';

const App = createNativeStackNavigator();

const options = {
  headerShown: false,
  contentStyle: {backgroundColor: colors.primaryColor},
};

const AppRoutes = () => (
  <App.Navigator>
    <App.Screen options={options} name="Home" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
