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

const erasedDataOnSync = true;

connectDb().then(async () => {
  if (erasedDataOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
      models.Photo.deleteMany({}),
      models.Comment.deleteMany({}),
    ]);
  }

  try {
    await createUserWithMsg();
    app.listen(process.env.PORT, () => {
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

const createUserWithMsg = async () => {
  const user1 = new models.User({
    userName: "Erez0601",
    email: "poliakerez@gmail.com",
    password: 123456,
  });
  const msg1 = new models.Message({ text: "test for db", user: user1.id });
  const msg2 = new models.Message({ text: "2nd msg for db", user: user1.id });
  await msg1.save();
  await msg2.save();
  await user1.save();
  console.log("msgs created");
};
