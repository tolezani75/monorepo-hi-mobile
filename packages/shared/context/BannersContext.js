import React, { useCallback, useState } from "react";
import { createContext } from "react";

import { apiHiv2 } from "../services/api";

export const BannersContext = createContext();

export const BannersProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);

  const GetBanners = useCallback(async (service) => {
    const response = await apiHiv2.get(`/courses/${service}/banners`);

    const { banners } = response.data;

    setBanners(banners);
  }, []);

  return (
    <BannersContext.Provider value={{ GetBanners, banners }}>
      {children}
    </BannersContext.Provider>
  );
};
