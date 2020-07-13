import "dotenv/config";
import cors from "cors";
import express from "express";
import models, { connectDb } from "./models";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

connectDb().then(async () => {
  try {
    await createUser();
    app.listen(process.env.PORT || 8080, () => {
      console.log(`example app listen on port ${process.env.PORT}`);
    });
  } catch (err) {
    throw new Error(err);
  }
});

app.use("/messages", routes.message);
app.use("/users", routes.user);
app.use("/photos", routes.photo);
app.use("/comments", routes.comment);
app.use("/likes", routes.like);
app.use("/follows", routes.follow);

const createUser = async () => {
  const user1 = new models.User({
    userName: "Erez0601",
    email: "poliakerez@gmail.com",
    password: 123456,
  });
};
