const express = require("express");
const {getSecurities, createSecurity, getSecurity, updateSecurity, deleteSecurity } = require('../controllers/security')

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(getSecurities).post(protect, authorize('user','admin'), createSecurity);

router.route('/:id').get(getSecurity).put(updateSecurity).delete(protect, authorize('user','admin'), deleteSecurity);

module.exports = router;
