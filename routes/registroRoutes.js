const express = require('express');
const { adicionarRegistro, deletarRegistro, listarRegistros } = require('../controllers/registroControllers');
const router = express.Router();
const withDB = require('../middlewares/withDB');

router.post('/salvar-registro', withDB, adicionarRegistro);
router.get('/listar-registros', withDB, listarRegistros);
router.delete('/deletar-registro/:id', withDB, deletarRegistro);

module.exports = router;