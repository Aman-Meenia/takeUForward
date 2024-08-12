// import connection from "../db/connectDB.js";
import Banner from "../modals/bannerModel.js";

export const updateDashboardData = async (req, res) => {
  try {
    const { isVisible, description, timeDuration, bannerLink, title } =
      req.body;

    console.log("isVisible", isVisible);
    console.log("description", description);
    console.log("timeDuration", timeDuration);
    console.log("bannerLink", bannerLink);
    console.log("title", title);

    if (!description || !timeDuration || !bannerLink || !title) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    if (isVisible !== true && isVisible !== false) {
      return res
        .status(400)
        .json({ message: "IsVisible must be true or false" });
    }

    const banner = await Banner.findByPk(1);

    const isVisibleInt = isVisible ? 1 : 0;

    if (isNaN(isVisibleInt)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    if (banner) {
      banner.isVisible = isVisibleInt;
      banner.description = description;
      banner.timeDuration = timeDuration;
      banner.bannerLink = bannerLink;
      banner.title = title;
      await banner.save();
      console.log("Banner updated successfully.");
    } else {
      await Banner.create({
        isVisible: isVisibleInt,
        description,
        timeDuration,
        bannerLink,
        title,
      });
      console.log("Banner created successfully.");
    }

    return res.status(200).json({ message: "Data updated successfully" });
  } catch (err) {
    console.log("Error while updating banner", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const banner = await Banner.findByPk(1);

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    return res.status(200).json(banner);
  } catch (err) {
    console.log("Error outside query:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
