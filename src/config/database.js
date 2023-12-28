const mongoose = require("mongoose");

const initDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (error) {
   console.log("mongo error", error);
  }
}

module.exports = initDatabase;
