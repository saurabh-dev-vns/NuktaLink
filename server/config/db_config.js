const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
  console.log("Attempting to connect to MongoDB...");

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connection established successfully.");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);

      console.log("Retrying connection in 5 seconds...");
      setTimeout(connectDB, 5000);
    });
};

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to application termination.");
  process.exit(0);
});


module.exports = connectDB;