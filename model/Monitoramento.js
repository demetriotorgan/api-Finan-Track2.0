const mongoose = require('mongoose');

const MonitoramentoSchema = new mongoose.Schema({
    descricao: {type:String, default:'Monitoramento'},
    tipo: {type:String, enum:['credito', 'debito', 'pix']},
    periodo: {type:Number},
    data:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('Monitoramento', MonitoramentoSchema);