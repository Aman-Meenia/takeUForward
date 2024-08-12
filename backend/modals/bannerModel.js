import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/connectDB.js"; // Adjust the path as necessary

const Banner = sequelize.define(
  "Banner",
  {
    isVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timeDuration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bannerLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Banner table synced successfully.");
  })
  .catch((err) => {
    console.error("Error syncing Banner table:", err);
  });

export default Banner;
