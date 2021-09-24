const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  dateCreated: { type: Date, required: true, default: new Date() },
  department: { type: String, required: true },
  lastUpdated: { type: String, required: true, default: new Date()}
});

module.exports = mongoose.model('Employee', employeeSchema);