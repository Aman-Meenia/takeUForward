import { BannerContext } from "@/store/Banner";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export const useGetBanner = () => {
  const [loading, setLoading] = useState(true);
  const { banner, setBanner } = useContext(BannerContext);
  console.log(" Loading WORKING ");
  const getBanner = async () => {
    setLoading(true);
    console.log("Loading....");
    try {
      await axios
        .get("http://localhost:3001/api/v1/dashboard")
        .then((response) => {
          console.log(response.data);
          setBanner({
            isVisible: response.data.isVisible,
            description: response.data.description,
            timeDuration: response.data.timeDuration,
            bannerLink: response.data.bannerLink,
            title: response.data.title,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, getBanner };
};
