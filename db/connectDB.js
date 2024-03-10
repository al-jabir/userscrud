const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/usersDB');
    console.log(`database connection is successfully`);
  } catch (err) {
    console.log('database is not connected');
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
