import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const RootNavigator = () => {
  return <AuthRoutes />;
};

export default RootNavigator;
