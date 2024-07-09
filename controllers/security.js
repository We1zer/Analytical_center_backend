
const Security = require('../models/Security');
exports.getSecurities = async (req, res, next) => {
  try {
    const securities = await Security.find();

    res.status(200).json({success: true, count: securities.length, data: securities})
  } catch (err) {
    res.status(400).json({success: false});
  }
};

exports.getSecurity = async (req, res, next) => {
  try {
    const security = await Security.findById(req.params.id);

    if(!security){
      return res.status(400).json({success: false});
    }

    res.status(200).json({success: true, data: security})
  } catch (err) {
    res.status(400).json({success: false});
  }
};

exports.createSecurity = async (req, res, next) => {
  try{
    const security = await Security.create(req.body);

    res.status(201).json({
      success: true,
      data: security
    })
  } catch (err){
    res.status(400).json({success:false})
  }
};
exports.updateSecurity = async (req, res, next) => {
    try {
      const security = await Security.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidors: true
      });
  
      if(!security){
        return res.status(400).json({success: false});
      }
  
      res.status(200).json({success: true, data: security})
    } catch (err) {
    res.status(400).json({success:false})
      
    }
    
  };
  exports.deleteSecurity = async (req, res, next) => {
    try {
      const security = await Security.findByIdAndDelete(req.params.id);
  
      if(!security){
        return res.status(400).json({success: false});
      }
  
      res.status(200).json({success: true,  data: {}})
    } catch (err) {
    res.status(400).json({success:false})
      
    }
    
  };
    
