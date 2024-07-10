const express = require("express");
const {getClients, createClient, getClient, updateClient, deleteClient } = require('../controllers/client')

const router = express.Router();

router.route('/').get(getClients).post(createClient);

router.route('/:id').get(getClient).put(updateClient).delete(deleteClient);

module.exports = router;