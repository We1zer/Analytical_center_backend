
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Security = require('../models/Security');
exports.getSecurities = asyncHandler(async (req, res, next) => {

    const securities = await Security.find();

    res.status(200).json({success: true, count: securities.length, data: securities})

});

exports.getSecurity = asyncHandler(async (req, res, next) => {
 
    const security = await Security.findById(req.params.id);

    if(!security){
      return next(new ErrorResponse(`Security not found with id of ${req.params.id}`, 404));

    }

    res.status(200).json({success: true, data: security})
 
});

exports.createSecurity = asyncHandler(async (req, res, next) => {
    const security = await Security.create(req.body);

    res.status(201).json({
      success: true,
      data: security
    })
  
});
exports.updateSecurity = asyncHandler(async (req, res, next) => {
      const security = await Security.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidors: true
      });
  
      if(!security){
        return next(new ErrorResponse(`Security not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true, data: security})
    
  });
  exports.deleteSecurity = asyncHandler(async (req, res, next) => {
      const security = await Security.findByIdAndDelete(req.params.id);
  
      if(!security){
        return next(new ErrorResponse(`Security not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true,  data: {}})
    
  });
    
