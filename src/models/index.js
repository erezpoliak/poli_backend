import mongoose from "mongoose";
import User from "./user.js";
import Message from "./message.js";
import Photo from "./photo.js";
import Comment from "./comment.js";
import Follow from "./follow.js";
import Like from "./like.js";

mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const models = { User, Message, Photo, Comment, Like, Follow };

export { connectDb };

export default models;
