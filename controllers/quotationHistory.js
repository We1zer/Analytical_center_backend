const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Quotation = require('../models/QuotationHistory');
exports.getQuotations = asyncHandler(async (req, res, next) => {

    const quotation = await Quotation.find();

    res.status(200).json({success: true, count: quotation.length, data: quotation})

});

exports.getQuotation = asyncHandler(async (req, res, next) => {
 
    const quotation = await Quotation.findById(req.params.id);

    if(!quotation){
      return next(new ErrorResponse(`Quotation not found with id of ${req.params.id}`, 404));

    }

    res.status(200).json({success: true, data: quotation})
 
});

exports.createQuotation = asyncHandler(async (req, res, next) => {
    const quotation = await Quotation.create(req.body);

    res.status(201).json({
      success: true,
      data: quotation
    })
  
});
exports.updateQuotation = asyncHandler(async (req, res, next) => {
      const quotation = await Quotation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidors: true
      });
  
      if(!quotation){
        return next(new ErrorResponse(`Quotation not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true, data: quotation})
    
  });
  exports.deleteQuotation = asyncHandler(async (req, res, next) => {
      const quotation = await Quotation.findByIdAndDelete(req.params.id);
  
      if(!quotation){
        return next(new ErrorResponse(`Quotation not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true,  data: {}})
    
  });
    
