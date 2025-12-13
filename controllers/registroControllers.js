const Registro = require('../model/Registro');

module.exports.adicionarRegistro = async(req,res)=>{
    const {descricao, valor, tipo, gasto, categoria, data} = req.body;

    try {
        const novoRegistro = new Registro({descricao, valor, tipo, gasto, categoria, data});
        await novoRegistro.save();
        res.status(201).json({
            sucess:true,
            msg:'Registro salvo com sucesso',
            registro: novoRegistro
        });

    } catch (error) {
        res.status(500).json({msg:'Erro ao cadastrar registro'});
    }
};

module.exports.listarRegsitros = async(req,res)=>{
    try {
        const registros = await Registro.find()
        .sort({_id:-1})
        .exec();
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({
            msg:'Erro ao listar registros'
        })
    }
};

module.exports.deletarRegistro = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({msg:'Id do registro não informado'});
        }
        const registroRemovido = await Registro.findByIdAndDelete(id);

        if(!registroRemovido){
            return res.status(400).json({msg: 'Registro não encontrado'})
        }

        res.status(200).json({
            message:'Registro excluido com sucesso',
            registro : registroRemovido
        });
    } catch (error) {
        console.error('Erro ao excluir registro', error);
        res.status(500).json({
            message:'Erro ao excluir registro',
            error: error.message
        })
    }
}
