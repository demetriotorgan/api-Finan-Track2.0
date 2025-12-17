const express = require('express');
const { adicionarObjetivo, listarObjetivos, deletarObjetivo } = require('../controllers/objetivosControllers');
const router = express.Router();
const withDB = require('../middlewares/withDB');


router.post('/salvar-objetivo', withDB, adicionarObjetivo);
router.get('/listar-objetivos', withDB, listarObjetivos);
router.delete('/deletar-objetivo/:id', withDB, deletarObjetivo);

module.exports = router;