const express = require("express");
const {getBankDeposits, createBankDeposit, getBankDeposit, updateBankDeposit, deleteBankDeposit } = require('../controllers/bankDeposit')

const router = express.Router();

router.route('/').get(getBankDeposits).post(createBankDeposit);

router.route('/:id').get(getBankDeposit).put(updateBankDeposit).delete(deleteBankDeposit);

module.exports = router;