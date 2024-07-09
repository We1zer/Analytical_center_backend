const express = require("express");
const {getSecurities, createSecurity, getSecurity, updateSecurity, deleteSecurity } = require('../controllers/security')

const router = express.Router();

router.route('/').get(getSecurities).post(createSecurity);

router.route('/:id').get(getSecurity).put(updateSecurity).delete(deleteSecurity);

module.exports = router;