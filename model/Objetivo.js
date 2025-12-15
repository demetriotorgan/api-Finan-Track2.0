const mongoose = require('mongoose');

const ObjetivoSchema = new mongoose.Schema({
    descricao: {type:String, default:'Objetivo'},
    limite: {type:String, default:0},
    categoria: {type:String, enum:['supermercado', 'bebidas', 'lanche', 'abastecimento', 'agua', 'luz', 'internet', 'farmacia', 'outro']},
    periodo: {type:Number},
    data:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Objetivo', ObjetivoSchema);