const express = require("express");
const {getBankDeposits, createBankDeposit, getBankDeposit, updateBankDeposit, deleteBankDeposit } = require('../controllers/bankDeposit')

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(getBankDeposits).post(protect, authorize('user','admin'), createBankDeposit);

router.route('/:id').get(getBankDeposit).put(protect, authorize('user','admin'), updateBankDeposit).delete(protect, authorize('user','admin'), deleteBankDeposit);

module.exports = router;