import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
