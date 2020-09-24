import React from "react";

import { BannersProvider } from "./BannersContext";

const AppProvider = ({ children }) => {
  return <BannersProvider>{children}</BannersProvider>;
};

export default AppProvider;
