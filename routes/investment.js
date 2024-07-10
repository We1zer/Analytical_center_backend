const express = require("express");
const {getInvestments, createInvestment, getInvestment, updateInvestment, deleteInvestment } = require('../controllers/investment')

const router = express.Router();

router.route('/').get(getInvestments).post(createInvestment);

router.route('/:id').get(getInvestment).put(updateInvestment).delete(deleteInvestment);

module.exports = router;