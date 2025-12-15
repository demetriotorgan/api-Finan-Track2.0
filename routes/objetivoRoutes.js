const express = require('express');
const { adicionarObjetivo, listarObjetivos, deletarObjetivo } = require('../controllers/objetivosControllers');
const router = express.Router();

router.post('/salvar-objetivo', adicionarObjetivo);
router.get('/listar-objetivos', listarObjetivos);
router.delete('/deletar-objetivo/:id', deletarObjetivo);

module.exports = router;