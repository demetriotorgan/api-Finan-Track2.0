const Objetivo = require('../model/Objetivo');

module.exports.adicionarObjetivo = async(req,res)=>{
    const {descricao, limite, categoria, periodo, data } = req.body;

    try {
        const novoObjetivo = new Objetivo({descricao, limite, categoria, periodo, data });
        await novoObjetivo.save();
        res.status(201).json({
            sucess:true,
            msg:'Objetivo salvo com sucesso',
            objetivo: novoObjetivo
        });        
    } catch (error) {
        res.status(500).json({msg:'Erro ao salvar objetivo'});
    }
};

module.exports.listarObjetivos = async(req,res)=>{
    try {
        const objetivos = await Objetivo.find()
        .sort({_id:-1})
        .exec();
        res.status(200).json(objetivos);
    } catch (error) {
        res.status(500).json({
            msg:'Erro ao listar objetivos'
        })
    }
};

module.exports.deletarObjetivo = async(req,res)=>{
    try {
        const {id} =  req.params;
        if(!id){
            return res.status(400).json({msg:'Id do registro não informado'});
        }
        const objetivoRemovido = await Objetivo.findByIdAndDelete(id);
        if(!objetivoRemovido){
            return res.status(400).json({msg:'Objetivo não encontrado'})
        }
        res.status(200).json({
            message:'Objetivo excluido com sucesso',
            objetivo: objetivoRemovido
        });
    } catch (error) {
        console.error('Erro ao excluir registro', error);
        res.status(500).json({
            message:'Erro ao excluir registro',
            error:error.message
        })
    }
};

