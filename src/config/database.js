const mongoose = require("mongoose");

const initDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blogko');
    console.log("connected to database");
  } catch (error) {
   console.log("mongo error", error);
  }
}

module.exports = initDatabase;
