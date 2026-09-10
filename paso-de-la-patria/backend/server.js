const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Archivos estáticos del Frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/alojamientos', require('./routes/alojamientos'));
app.use('/api/pesca', require('./routes/pesca'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌸 Servidor corriendo con éxito en http://localhost:${PORT}`);
});
