const mongoose = require('mongoose');
const server = 'localhost';
const port = 27017;
const DB = "cco"
const src_mongo = `mongodb://${server}:${port}/${DB}`

// colocamos la url de conexión local y el nombre de la base de datos

module.exports.connectDB = async () => {
  await mongoose.connect(src_mongo);
  console.log(`Connect to ${src_mongo}`);
};

module.exports.closeDB = async () => {
  await mongoose.disconnect();
  console.log(`Disconnect to ${src_mongo}`);
}; 