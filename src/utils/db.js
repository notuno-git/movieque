import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Mongo Not Connected.");
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
