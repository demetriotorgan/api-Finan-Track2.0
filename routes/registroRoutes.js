const express = require('express');
const { adicionarRegistro, listarRegsitros, deletarRegistro } = require('../controllers/registroControllers');
const router = express.Router();

router.post('/salvar-registro', adicionarRegistro);
router.get('/listar-registros', listarRegsitros);
router.delete('/deletar-registro/:id', deletarRegistro);

module.exports = router;