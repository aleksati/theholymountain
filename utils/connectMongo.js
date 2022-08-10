import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.mongouri);

export default connectMongo;
