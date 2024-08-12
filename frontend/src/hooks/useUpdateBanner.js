import axios from "axios";
import { useContext, useState } from "react";
import { BannerContext } from "../store/Banner";
import toast from "react-hot-toast";

export const useUpdateBanner = () => {
  const [loading, setLoading] = useState(false);
  const { banner, setBanner } = useContext(BannerContext);

  const updateBanner = async ({
    isVisible,
    description,
    timeDuration,
    bannerLink,
    title,
  }) => {
    if (
      !validateBannerDate({
        isVisible,
        description,
        timeDuration,
        bannerLink,
        title,
      })
    ) {
      return;
    }
    console.log("IsVisible: ", isVisible);
    console.log("Description: ", description);
    console.log("timeDuration: ", timeDuration);
    console.log("bannerLink: ", bannerLink);
    console.log("title: ", title);

    setLoading(true);
    await axios
      .patch("http://localhost:3001/api/v1/dashboard", {
        isVisible,
        description,
        timeDuration,
        bannerLink,
        title,
      })
      .then((response) => {
        console.log(response.data);
        setBanner({
          isVisible: response.data.isVisible,
          description: response.data.description,
          timeDuration: response.data.timeDuration,
          bannerLink: response.data.bannerLink,
          title: response.data.title,
        });
        toast.success("Banner updated successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update banner", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, updateBanner };
};

function isValidTimeString(timeStr) {
  const timeRegex = /^(2[0-4]|[01]?[0-9]):[0-5]?[0-9]:[0-5]?[0-9]$/;

  return timeRegex.test(timeStr);
}

const validateBannerDate = ({
  isVisible,
  description,
  timeDuration,
  bannerLink,
  title,
}) => {
  if (isVisible != true && isVisible != false) {
    toast.error("Invalid visibility", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }
  if (!description || !timeDuration || !bannerLink || !title) {
    toast.error("All fields are required", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }

  if (!isValidTimeString(timeDuration)) {
    toast.error("Invalid time duration", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }

  if (!bannerLink.startsWith("http://") && !bannerLink.startsWith("https://")) {
    toast.error("Invalid link", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }

  if (description.length > 200) {
    toast.error("Description should be less than 200 characters", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }

  if (title.length > 50) {
    toast.error("Title should be less than 30 characters", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    return false;
  }

  return true;
};
