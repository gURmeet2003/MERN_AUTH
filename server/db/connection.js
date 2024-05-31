import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose
      .connect(process.env.mongodb)
      .then(() => {
        console.log("Db connected");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
};

export default dbconnection;
