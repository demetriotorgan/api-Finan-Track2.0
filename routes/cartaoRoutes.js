const express = require('express');
const router = express.Router();
const withDB = require('../middlewares/withDB');
const { adicionarCartao, listarCartaos, deletarCartao } = require('../controllers/cartaoControllers');

router.post('/salvar-cartao', withDB, adicionarCartao);
router.get('/listar-cartoes', withDB, listarCartaos);
router.delete('/excluir-cartao/:id', withDB, deletarCartao);

module.exports = router;

