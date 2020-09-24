import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import SignIn from '../../pages/Auth/SignIn';
import SignUp from '../../pages/Auth/SignUp';
import ForgotPassword from '../../pages/Auth/ForgotPassword';
import Welcome from '../../pages/Auth/Welcome';

import colors from '../../styles/colors';

const Auth = createNativeStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator>
    <Auth.Screen
      options={{
        cardStyle: {backgroundColor: colors.primaryColor},
        headerShown: false,
      }}
      name="SignIn"
      component={SignIn}
    />
    <Auth.Screen
      options={{
        headerShown: false,
      }}
      name="Welcome"
      component={Welcome}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
