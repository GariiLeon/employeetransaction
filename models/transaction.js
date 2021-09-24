const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  employeeId: { type: Number, required: true , index: true},
  transactionDate: {type: String, index: true},
  checkInDateTime: { type: Date, required: true },
  checkOutDateTime: { type: Date},
  comment: {type: String},
  timeDuration: {type: Number}
});

module.exports = mongoose.model('Transaction', transactionSchema);