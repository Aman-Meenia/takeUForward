import React, { useState } from "react";

export const BannerContext = React.createContext();

const BannerContextProvider = ({ children }) => {
  const [banner, setBanner] = useState({
    isVisible: false,
    description: "",
    timeDuration: 0,
    bannerLink: "",
  });
  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

export default BannerContextProvider;
