const { alojamientosDB } = require('../config/database');

exports.getAlojamientos = (req, res) => {
    res.status(200).json({ success: true, count: alojamientosDB.length, data: alojamientosDB });
};
