const express = require('express');
const { adicionarMonitoramento, listarMonitoramentos, deletarMonitoramento } = require('../controllers/monitoramentoControllers');
const router = express.Router();
const withDB = require('../middlewares/withDB');


router.post('/salvar-monitoramento', withDB, adicionarMonitoramento);
router.get('/listar-monitoramentos', withDB, listarMonitoramentos);
router.delete('/excluir-monitoramento/:id', withDB, deletarMonitoramento);

module.exports = router;