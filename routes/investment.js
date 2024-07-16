const express = require("express");
const {getInvestments, createInvestment, getInvestment, updateInvestment, deleteInvestment  } = require('../controllers/investment')

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(getInvestments).post(protect, authorize('user','admin'), createInvestment);



router.route('/:id').get(getInvestment).put(protect, authorize('user','admin'), updateInvestment).delete(protect, authorize('user','admin'), deleteInvestment);


module.exports = router;