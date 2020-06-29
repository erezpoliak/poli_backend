import moongoose from "mongoose";

const messageSchema = new moongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Message = moongoose.model("Message", messageSchema);

export default Message;
