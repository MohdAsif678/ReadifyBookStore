import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';


import bookRoute from "./route/book.route.js"
import userRoute from './route/user.route.js'
// import User from "./modal/user.modal.js";

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();


// const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

//connect MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(3000, () => {
    console.log(`🚀 Server listening on port 3000`);
  });
}).catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});

// routes
app.use("/book",bookRoute)
app.use("/signup",userRoute)
