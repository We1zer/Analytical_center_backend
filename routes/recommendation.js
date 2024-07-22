const express = require("express");
const { getInvestmentRecommendations, getInvestmentPerformance } = require('../controllers/recommendations');

const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(getInvestmentRecommendations);
router.route('/performance').get(protect, authorize('user', 'admin'), getInvestmentPerformance);

module.exports = router;
