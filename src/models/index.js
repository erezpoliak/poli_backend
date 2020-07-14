import mongoose from "mongoose";
import User from "./user";
import Message from "./message";
import Photo from "./photo";
import Comment from "./comment";
import Follow from "./follow";
import Like from "./like";

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
