import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashpass = bcrypt.hashSync(password, 10);
    const data = new User({ username, email, password: hashpass });
    await data.save();
    res.status(201).json({ msg: "Registered" });
  } catch (e) {
    // next(errorHandler(300, "something went wrong."));
    next(e);
  }
};
