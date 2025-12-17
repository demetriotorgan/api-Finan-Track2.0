const Cartao = require('../model/Cartao');

module.exports.adicionarCartao = async(req,res)=>{
    const {descricao,limite, valorInicial, data } = req.body;

    try {
        const novoCartao = new Cartao({descricao,limite, valorInicial, data});
        await novoCartao.save();
        res.status(201).json({
            sucess:true,
            msg:'Cartao salvo com sucesso',
            cartao: novoCartao
        });
    } catch (error) {
        res.status(500).json({msg:'Erro ao salvar cartão'});
    }
};

module.exports.listarCartaos = async(req,res)=>{
    try {
        const cartoes = await Cartao.find()
            .sort({_id:-1})
            .exec();
            res.status(200).json(cartoes);
    } catch (error) {
        res.status(500).json({
            msg:'Erro ao listar cartoes'
        })
    }
};

module.exports.deletarCartao = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({msg:'Id do cartao não fornecido'});
        }
        const cartaoRemovido = await Cartao.findByIdAndDelete(id);
        if(!cartaoRemovido){
            return res.status(400).json({msg:'Cartao não encontrado'})
        }
        res.status(200).json({
            message:'Cartao excluido com sucesso',
            cartao: cartaoRemovido
        });
    } catch (error) {
        console.error('Erro ao excluir registro', error);
        res.status(500).json({
            message:'Erro ao excluir registro',
            error:error.message
        })
    }
};