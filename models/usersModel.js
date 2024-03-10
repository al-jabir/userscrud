const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    minlength: 5,
  },
  age: {
    type: Number,
    required: [true, 'age is required'],
  },
  village: {
    type: String,
    required: [true, 'village is required'],
  },
  job: {
    type: String,
    required: [true, 'job is required'],
  },
  location: {
    type: String,
    required: [true, 'location is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const users = mongoose.model('users', usersSchema);
module.exports = users;
