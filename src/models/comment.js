import mongoose from "mongoose";

const commnentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentedUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    photoId: {
      type: mongoose.Schema.Types.ObjectId,
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
