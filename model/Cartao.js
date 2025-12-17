const mongoose = require('mongoose');

const CartaoSchema = new mongoose.Schema({
    descricao:{type:String, default:'Cartao'},
    limite:{type:Number, default:0},
    valorInicial:{type:Number, default:0},
    data:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Cartao', CartaoSchema);