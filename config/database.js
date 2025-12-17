const mongoose = require('mongoose');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.DATABASE_URL, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log('✅ MongoDB conectado');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

function getMongoStatus() {
  const states = {
    0: 'desconectado',
    1: 'conectado',
    2: 'conectando',
    3: 'desconectando'
  };

  return states[mongoose.connection.readyState] || 'desconhecido';
}

module.exports = { connectDB, getMongoStatus };
