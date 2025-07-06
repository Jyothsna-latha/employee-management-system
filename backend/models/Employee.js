const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: String,
  fullName: String,
  phoneNumber: String,
  email: String,
  role: String,
  password: String
});

module.exports = mongoose.model('Employee', employeeSchema);