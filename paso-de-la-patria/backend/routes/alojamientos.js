const express = require('express');
const router = express.Router();
const { getAlojamientos } = require('../controllers/alojamientosController');

router.get('/', getAlojamientos);
module.exports = router;
