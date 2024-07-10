// models/Investment.js

const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  security: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Security',
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  saleDate: {
    type: Date,
    required: false,
  },
  salePrice: {
    type: Number,
    required: false,
  }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
