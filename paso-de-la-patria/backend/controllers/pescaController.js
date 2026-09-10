const { serviciosPescaDB } = require('../config/database');

exports.getServiciosPesca = (req, res) => {
    res.status(200).json({ success: true, count: serviciosPescaDB.length, data: serviciosPescaDB });
};
