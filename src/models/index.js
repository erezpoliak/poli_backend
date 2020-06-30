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

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

const models = { User, Message, Photo, Comment, Like, Follow };

export { connectDb };

export default models;
