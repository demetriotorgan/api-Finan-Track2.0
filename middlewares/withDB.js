const { connectDB } = require('../config/database');

async function withDB(req, res, next) {
  try {
    await connectDB(); // 🔌 garante conexão
    next();
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);

    res.status(500).json({
      msg: 'Erro ao conectar ao banco de dados'
    });
  }
}

module.exports = withDB;
