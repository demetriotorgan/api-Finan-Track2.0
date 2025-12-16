const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

//Rotas
const registroRoutes = require('./routes/registroRoutes');
const objetivoRoutes = require('./routes/objetivoRoutes');
const monitoramentoRoutes = require('./routes/monitoramentoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin:'*',
}));
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();    
  });

mongoose
    .connect(process.env.DATABASE_URL)
    .then(()=>console.log('Conectado ao mongoDB'))
    .catch((err)=>console.log(err));

app.use('/', registroRoutes,objetivoRoutes,monitoramentoRoutes);
app.get('/', (req,res)=>{
     res.status(200).send("🚀 API de Finan-Track está online e funcional!");
})

app.listen(PORT, ()=>console.log(`Rodando na porta ${PORT}`));