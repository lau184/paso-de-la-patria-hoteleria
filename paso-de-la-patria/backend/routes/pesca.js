const express = require('express');
const router = express.Router();
const { getServiciosPesca } = require('../controllers/pescaController');

router.get('/', getServiciosPesca);
module.exports = router;
