import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("db connected ... ");
    console.log("connected with host ", connection.host);
  } catch (error) {
    console.log("failed to connect with databse");
    console.log(error);
  }
};
