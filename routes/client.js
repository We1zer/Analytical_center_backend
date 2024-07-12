const express = require("express");
const {getClients, createClient, getClient, updateClient, deleteClient } = require('../controllers/client')

const router = express.Router();

const {protect, authorize} = require('../middleware/auth');

router.route('/').get(getClients).post(protect, authorize('user','admin'), createClient);

router.route('/:id').get(getClient).put(protect, authorize('user','admin'), updateClient).delete(protect, authorize('user','admin'), deleteClient);

module.exports = router;