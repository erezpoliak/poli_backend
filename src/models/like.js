import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      ref: "User",
    },
    photo: {
      type: Object,
      ref: "Photo",
    },
    userWhoLikedIt: {
      type: Object,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
