const mongoose = require('mongoose');

const SecuritySchema = new mongoose.Schema({
  securityCode: {
    type: String,
    unique: true,
    required: true,
    maxlength: [50, 'Code of securities can not be more than 50 characters']
  },
  minTransactionAmount: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  annualYield: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Security', SecuritySchema);