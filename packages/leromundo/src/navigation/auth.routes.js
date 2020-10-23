import React from 'react';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Welcome from '../pages/Auth/Welcome';

import colors from '../styles/colors';

const Auth = createNativeStackNavigator();

const options = {
  headerShown: false,
  contentStyle: { backgroundColor: colors.backgroundDefault },
};

const AuthRoutes = () => (
  <Auth.Navigator initialRouteName="SignIn">
    <Auth.Screen options={options} name="SignIn" component={SignIn} />
    <Auth.Screen options={options} name="SignUp" component={SignUp} />

    <Auth.Screen options={options} name="Welcome" component={Welcome} />
    <Auth.Screen
      options={options}
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
