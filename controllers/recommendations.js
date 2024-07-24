const asyncHandler = require('../middleware/async');
const Security = require('../models/Security');
const Investment = require('../models/Investment');

exports.getInvestmentRecommendations = asyncHandler(async (req, res, next) => {
    const recommendations = await Security.find({
        rating: { $gte: 4 },
        annualYield: { $gte: 3 }
    }).sort({ rating: -1, annualYield: -1 });

    res.status(200).json({ success: true, count: recommendations.length, data: recommendations });
});


 exports.getInvestmentPerformance = asyncHandler(async (req, res, next) => {
    const investments = await Investment.find().populate('security').populate('client');
  
    const performance = investments.map(investment => {
        let profit = 0;
        if (investment.salePrice && investment.purchasePrice) {
            profit = investment.salePrice - investment.purchasePrice;
        }
        return {
            investment: investment,
            profit: profit,
            profitPercentage: (profit / investment.purchasePrice) * 100
        };
    });
  
    performance.sort((a, b) => b.profitPercentage - a.profitPercentage);

    res.status(200).json({ success: true, count: performance.length, data: performance });
  });
      
  
