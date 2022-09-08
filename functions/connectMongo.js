import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection.readyState !== 1) {
    return mongoose.connect(process.env.mongouri);
  }
  return null;
};

export default connectMongo;
