const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  employeeId: { type: Schema.Types.ObjectId, required: true },
  time: { type: Date, required: true },
  comment: {type: String},
  state: { type: Number, required: true, enum : [10,11] },
  state_name: { type: String, required: true },
});

module.exports = mongoose.model('Transaction', employeeSchema);