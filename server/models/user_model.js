import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const Userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Userschema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (e) {
//     next(e);
//   }
// });

const User = mongoose.model("User", Userschema);

export default User;
