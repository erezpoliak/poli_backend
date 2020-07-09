import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
