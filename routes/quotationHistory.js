const express = require("express");
const {getQuotations, createQuotation, getQuotation, updateQuotation, deleteQuotation } = require('../controllers/quotationHistory')

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(getQuotations).post(protect, authorize('user','admin'), createQuotation);

router.route('/:id').get(getQuotation).put(protect, authorize('user','admin'), updateQuotation).delete(protect, authorize('user','admin'), deleteQuotation);

module.exports = router;