import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// auth
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Welcome from '../pages/Auth/Welcome';

import colors from '../styles/colors';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{headerShown: false}}>
    <Auth.Screen
      options={{cardStyle: {backgroundColor: colors.primaryColor}}}
      name="SignIn"
      component={SignIn}
    />
    <Auth.Screen name="Welcome" component={Welcome} />
  </Auth.Navigator>
);

export default AuthRoutes;
