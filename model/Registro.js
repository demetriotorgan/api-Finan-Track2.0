const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
    descricao: {type:String, default:'Gasto'},
    valor:{type:Number, default:0},
    tipo:{type:String, enum:['credito', 'debito', 'pix']},
    gasto:{type:String, enum:['essencial', 'nao-essencial']},
    categoria:{type:String, enum:['supermercado', 'bebidas', 'lanche', 'abastecimento', 'agua', 'luz', 'internet', 'farmacia', 'outro']},
    data:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Registro', RegistroSchema);