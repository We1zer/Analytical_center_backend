const asyncHandler = require('../middleware/async');
const Security = require('../models/Security');
const Investment = require('../models/Investment');

// Метод для отримання рекомендацій
exports.getInvestmentRecommendations = asyncHandler(async (req, res, next) => {
    // Отримуємо всі цінні папери
    const securities = await Security.find();
    
    // Ваша логіка для надання рекомендацій (наприклад, на основі рейтингу та дохідності)
    const recommendations = securities.filter(security => {
        return security.rating >= 4 && security.annualYield >= 5;
    });

    res.status(200).json({ success: true, count: recommendations.length, data: recommendations });
});

 // Метод для отримання продуктивності інвестицій
 exports.getInvestmentPerformance = asyncHandler(async (req, res, next) => {
    // Отримуємо всі інвестиції
    const investments = await Investment.find().populate('security').populate('client');
  
    // Логіка для обчислення продуктивності
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
      
  