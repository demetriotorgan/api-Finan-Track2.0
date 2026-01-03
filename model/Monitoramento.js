const mongoose = require('mongoose');

const MonitoramentoSchema = new mongoose.Schema({
    descricao: {type:String, default:'Monitoramento'},
    tipo: {type:String, enum:['credito', 'debito', 'pix']},
    limite:{type:Number, default:0},
    periodo: {type:Number},
    data:{type:Date, default:Date.now()},
    dataLimite:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Monitoramento', MonitoramentoSchema);