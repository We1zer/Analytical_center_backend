const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const BankDeposit = require('../models/BankDeposit');
exports.getBankDeposits = asyncHandler(async (req, res, next) => {

    const bankDeposit = await BankDeposit.find();

    res.status(200).json({success: true, count: bankDeposit.length, data: bankDeposit})

});

exports.getBankDeposit = asyncHandler(async (req, res, next) => {
 
    const bankDeposit = await BankDeposit.findById(req.params.id);

    if(!bankDeposit){
      return next(new ErrorResponse(`BankDeposit not found with id of ${req.params.id}`, 404));

    }

    res.status(200).json({success: true, data: bankDeposit})
 
});

exports.createBankDeposit = asyncHandler(async (req, res, next) => {
    const bankDeposit = await BankDeposit.create(req.body);

    res.status(201).json({
      success: true,
      data: bankDeposit
    })
  
});
exports.updateBankDeposit = asyncHandler(async (req, res, next) => {
      const bankDeposit = await BankDeposit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidors: true
      });
  
      if(!bankDeposit){
        return next(new ErrorResponse(`BankDeposit not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true, data: bankDeposit})
    
  });
  exports.deleteBankDeposit = asyncHandler(async (req, res, next) => {
      const bankDeposit = await BankDeposit.findByIdAndDelete(req.params.id);
  
      if(!bankDeposit){
        return next(new ErrorResponse(`BankDeposit not found with id of ${req.params.id}`, 404));
      }
  
      res.status(200).json({success: true,  data: {}})
    
  });
    
