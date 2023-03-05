import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION);

  console.log("connection succeded");
};

const elementSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  
});

const Element = mongoose.model("Element", elementSchema);

export { connectDatabase, Element };
