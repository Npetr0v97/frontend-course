import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      minPoolSize: 20,
    });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
