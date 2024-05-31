import User from "../models/user_model.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const data = new User({ username, email, password });
    await data.save();
    res.status(201).json({ msg: "Registered" });
  } catch (e) {
    res.status(500).send(e);
  }
};
