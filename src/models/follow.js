import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  followingUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Follow = mongoose.model("Follow", followSchema);
