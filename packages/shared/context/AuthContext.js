import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { apiUatHiv1, apiHiv1 } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = useCallback(async (service, username, password) => {
    const response = await apiUatHiv1.post(`/auth/login`, {
      service: service,
      username,
      password,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@leromundo:token", "@leromundo:user"]);

    setData({});
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
