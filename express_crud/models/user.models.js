// Add this at the top!
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

module.exports = mongoose.model("user", userSchema);
