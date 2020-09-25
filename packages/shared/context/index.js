import React from "react";

import { BannersProvider } from "./BannersContext";
import { AuthProvider } from "./AuthContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <BannersProvider>{children}</BannersProvider>
    </AuthProvider>
  );
};

export default AppProvider;
