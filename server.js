import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import flowersController from "./controllers/flower.js";
import indoorController from "./controllers/indoor.js";
import outdoorController from "./controllers/outdoor.js";
import usersController from "./controllers/user.js";
import reviewController from "./controllers/reviews.js";
import loginController from "./controllers/login.js";
const PORT = process.env.PORT || 10000;
const app = express();
dotenv.config();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port no", PORT);
    });
  })
  .catch(console.error);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());
app.use(
  session({
    secret: "gotasecertcanukeepit",
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/flowers", flowersController);
app.use("/indoor", indoorController);
app.use("/outdoor", outdoorController);
app.use("/users", usersController);
app.use("/review", reviewController);
app.use("/login", loginController);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
