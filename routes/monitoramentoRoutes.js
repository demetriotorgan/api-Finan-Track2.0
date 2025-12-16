const express = require('express');
const { adicionarMonitoramento, listarMonitoramentos, deletarMonitoramento } = require('../controllers/monitoramentoControllers');
const router = express.Router();

router.post('/salvar-monitoramento', adicionarMonitoramento);
router.get('/listar-monitoramentos', listarMonitoramentos);
router.delete('/excluir-monitoramento/:id', deletarMonitoramento);

module.exports = router;