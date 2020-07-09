import mongoose from "mongoose";

const commnentSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      ref: "User",
      required: true,
    },
    commentedUser: {
      type: Object,
      ref: "User",
      required: true,
    },
    photo: {
      type: Object,
      ref: "Photo",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

commnentSchema.statics.findByPhotoId = async function (photoId) {
  const comment = await this.find({ photoId: photoId });
  return comment;
};

const Comment = mongoose.model("Comment", commnentSchema);

export default Comment;
