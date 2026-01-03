const mongoose = require('mongoose');

const ObjetivoSchema = new mongoose.Schema({
    descricao: {type:String, default:'Objetivo'},
    limite: {type:Number, default:0},
    tipo:{type:String, enum:['credito', 'debito', 'pix']},
    categoria: {type:String, enum:['supermercado', 'bebidas', 'lanche', 'abastecimento', 'agua', 'luz', 'internet', 'farmacia', 'outro']},
    gasto:{type:String, enum:['essencial', 'nao-essencial']},
    periodo: {type:Number},
    data:{type:Date, default:Date.now()},
    dataLimite:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Objetivo', ObjetivoSchema);