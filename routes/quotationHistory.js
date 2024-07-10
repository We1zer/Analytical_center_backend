const express = require("express");
const {getQuotations, createQuotation, getQuotation, updateQuotation, deleteQuotation } = require('../controllers/quotationHistory')

const router = express.Router();

router.route('/').get(getQuotations).post(createQuotation);

router.route('/:id').get(getQuotation).put(updateQuotation).delete(deleteQuotation);

module.exports = router;