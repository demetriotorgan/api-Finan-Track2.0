const express = require('express');
const cors = require('cors');
require('dotenv').config();

// DB
const { connectDB } = require('./config/database');

// Rotas
const registroRoutes = require('./routes/registroRoutes');
const objetivoRoutes = require('./routes/objetivoRoutes');
const monitoramentoRoutes = require('./routes/monitoramentoRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

// 🔌 Conecta ao banco SEM bloquear execução
connectDB().catch((err) => {
  console.error('❌ Erro ao conectar ao MongoDB:', err);
});

// Rotas
app.use('/', registroRoutes, objetivoRoutes, monitoramentoRoutes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({
    status: '🚀 API Finan-Track online',
    timestamp: new Date().toISOString()
  });
});

// 🚨 NÃO usar app.listen no Vercel
module.exports = app;
