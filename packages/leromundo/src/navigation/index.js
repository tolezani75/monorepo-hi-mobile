import React, {useContext} from 'react';

import {ActivityIndicator, View} from 'react-native';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const RootNavigator = () => {
  const {userToken, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  return userToken ? <AppRoutes /> : <AuthRoutes />;
};

export default RootNavigator;
