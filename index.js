const express = require('express');
const cors = require('cors');
require('dotenv').config();
const withDB = require('./middlewares/withDB');


// DB
const {connectDB, getMongoStatus } = require('./config/database');


// Rotas
const registroRoutes = require('./routes/registroRoutes');
const objetivoRoutes = require('./routes/objetivoRoutes');
const monitoramentoRoutes = require('./routes/monitoramentoRoutes');
const cartaoRoutes = require('./routes/cartaoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

// Rotas
app.use('/', registroRoutes, objetivoRoutes, monitoramentoRoutes,cartaoRoutes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({
    status: '🚀 API Finan-Track online',
    timestamp: new Date().toISOString()
  });
});

// 🔎 Endpoint de status
app.get('/status', withDB, (req, res) => {
  res.json({
    api: 'online',
    mongo: getMongoStatus(),
    timestamp: new Date().toISOString()
  });
});


// ✅ SOMENTE escuta a porta se NÃO estiver no Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando localmente na porta ${PORT}`);
  });
  connectDB()
    .then(() => console.log('🧪 Mongo conectado em ambiente local'))
    .catch(err => console.error('❌ Erro Mongo local:', err));
}

module.exports = app;
