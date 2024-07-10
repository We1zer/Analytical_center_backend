// models/QuotationHistory.js

const mongoose = require('mongoose');

const QuotationHistorySchema = new mongoose.Schema({
  security: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Security',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('QuotationHistory', QuotationHistorySchema);
