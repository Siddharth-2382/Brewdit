import mongoose from "mongoose";

var isConnected = false; // track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!isConnected)
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "brewdit_user",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnected = true;

      console.log("MongoDB is connected");
    } catch (error) {
      console.log(error);
    }
};
