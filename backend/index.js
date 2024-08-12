// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import dashboardRoute from "./routes/dashboardRoute.js";
// import connection from "./db/connectDB.js";
// import bodyParser from "body-parser";
// const app = express();
//
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// dotenv.config();
//
// app.use("/api/v1/dashboard", dashboardRoute);
//
// const PORT = process.env.PORT;
// import db from "./db/connectDB.js";
// // db.sequelize
// //   .sync({ force: false })
// //   .then(() => {
// //     console.log("Banner table synced successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Error syncing Banner table:", err);
// //   });
//
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import dotenv from "dotenv";
dotenv.config(); // Ensure this is at the very top

import express from "express";
import cors from "cors";
import dashboardRoute from "./routes/dashboardRoute.js";
import bodyParser from "body-parser";
import db from "./db/connectDB.js"; // Ensure your connectDB uses the env variables correctly

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/dashboard", dashboardRoute);

const PORT = process.env.PORT || 3000; // Provide a fallback port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
