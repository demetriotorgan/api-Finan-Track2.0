const Monitoramento = require('../model/Monitoramento');

module.exports.adicionarMonitoramento = async(req,res)=>{
    const {descricao, tipo,limite, periodo, data, dataLimite} = req.body;

    try {
        const novoMonitoramento = new Monitoramento({descricao, tipo, limite, periodo, data, dataLimite});
        await novoMonitoramento.save();
        res.status(201).json({
            sucess:true,
            msg:'Monitoramento salvo com sucesso',
            monitoramento: novoMonitoramento
        });
    } catch (error) {
        res.status(500).json({msg:'Erro ao salvar monitoramento'});
    }
};

module.exports.listarMonitoramentos = async(req,res)=>{
    try {
        const monitoramentos = await Monitoramento.find()
        .sort({_id:-1})
        .exec();
        res.status(200).json(monitoramentos);
    } catch (error) {
        res.status(500).json({
            msg:'Erro ao listar monitoramentos'
        })
    }
};

module.exports.deletarMonitoramento = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({msg:'Id do registro não informado'});
        }
        const monitoramentoRemovido = await Monitoramento.findByIdAndDelete(id);
        if(!monitoramentoRemovido){
            return res.status(400).json({msg:'Monitoramento não encontrado'})
        }
        res.status(200).json({
            message:'Monitoramento excluido com sucesso',
            monitoramento: monitoramentoRemovido
        });
    } catch (error) {
         console.error('Erro ao excluir registro', error);
        res.status(500).json({
            message:'Erro ao excluir registro',
            error:error.message
        })
    }
};