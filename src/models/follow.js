import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
  user: {
    type: Object,
    ref: "User",
  },
  followingUser: {
    type: Object,
    ref: "User",
  },
});

const Follow = mongoose.model("Follow", followSchema);

export default Follow;
