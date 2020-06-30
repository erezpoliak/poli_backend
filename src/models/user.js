import moongoose from "mongoose";

const userSchema = new moongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({ userName: login });
  if (!user) user = await this.findOne({ email: login });
  return user;
};

const User = moongoose.model("User", userSchema);

export default User;
