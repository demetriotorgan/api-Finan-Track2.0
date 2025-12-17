const express = require('express');
const cors = require('cors');
require('dotenv').config();
const withDB = require('./middlewares/withDB');


// DB
const {getMongoStatus } = require('./config/database');


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

// Rotas
app.use('/', registroRoutes, objetivoRoutes, monitoramentoRoutes);

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

module.exports = app;
