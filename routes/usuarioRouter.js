const usuarioController = require('../controllers/usuario.Controllers');
const express = require('express');
const router = express.Router();

router.post('/', usuarioController.criarUsuario);

module.exports = router;