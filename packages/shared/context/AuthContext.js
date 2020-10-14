import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { apiUatHiv1, apiHiv1 } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState({});

  useEffect(() => {
    async function loadStorage() {
      setLoading(true);
      const token = await AsyncStorage.getItem("user_token");

      if (token) {
        setUserToken({ token });
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  const SignIn = useCallback(async ({ service, username, password }) => {
    try {
      const response = await apiHiv1.post(`/auth/login/`, {
        service: service,
        username,
        password,
      });

      const { token } = response.data;

      await AsyncStorage.setItem("user_token", token);

      setUserToken({ token });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const SignOut = useCallback(async () => {
    await AsyncStorage.removeItem("user_token");

    setUserToken({});
  }, []);

  const resetPassword = useCallback(async ({ service, email }) => {
    try {
      await apiHiv1.post(`/auth/reset/`, {
        service,
        account: email,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ SignOut, userToken, SignIn, resetPassword, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
