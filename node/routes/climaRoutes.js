const express = require('express');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
    try {
    const cidade = 'Guarapuava - PR';
    const temperatura = 25.23; // Valor fixo
    const umidade = 60; // Valor fixo
    const horaAtual = new Date().toLocaleTimeString();

    await res.json({ cidade, temperatura, umidade, horaAtual });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar clima' });
    }
});

module.exports = router;
