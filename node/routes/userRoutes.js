const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Rota de cadastro
router.post('/', async (req, res) => {
    try {
        const { nome, email, senha, dataNascimento } = req.body;
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        const newUser = new User({ nome, email, senha: senhaHash, dataNascimento });
        await newUser.save();

        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
});

// Rota de login
router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
});


// Rota para listar todos os usuários
router.get('/list', verifyToken, async (req, res) => {
    try {
        const users = await User.find({}, '-senha -__v'); // Exclui o campo senha da resposta

        const usersRenamed = users.map(user => ({
            "id": user._id,
            "nome": user.nome,
            "datanascimento": user.dataNascimento,
            "email": user.email
        }));

        res.json(usersRenamed);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
});



// Rota para editar cadastro
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const { nome, email, dataNascimento } = req.body;
        await User.findByIdAndUpdate(req.params.id, { nome, email, dataNascimento });
        res.json({ message: 'Cadastro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar cadastro' });
    }
});

// Rota para excluir cadastro
router.delete('/:id', verifyToken, async (req, res) => {
    try {

        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cadastro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir cadastro' });
    }
});

module.exports = router;
