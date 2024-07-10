const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Investment = require('../models/Investment');
exports.getInvestments = asyncHandler(async (req, res, next) => {

    const investments = await Investment.find();

    res.status(200).json({success: true, count: investments.length, data: investments})

});

exports.getInvestment = asyncHandler(async (req, res, next) => {
 
    const investment = await Investment.findById(req.params.id);

    if(!investment){
      return next(new ErrorResponse(`Investment not found with id of ${req.params.id}`, 404));

    }

    res.status(200).json({success: true, data: investment})
 
});

exports.createInvestment = asyncHandler(async (req, res, next) => {
    const investment = await Investment.create(req.body);

    res.status(201).json({
      success: true,
      data: investment
    })
  
});
exports.updateInvestment = asyncHandler(async (req, res, next) => {
      const investment = await Investment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidors: true
      });
  
      if(!investment){
        return next(new ErrorResponse(`Investment not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true, data: investment})
    
  });
  exports.deleteInvestment = asyncHandler(async (req, res, next) => {
      const investment = await Investment.findByIdAndDelete(req.params.id);
  
      if(!investment){
        return next(new ErrorResponse(`Investment not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true,  data: {}})
    
  });
    
