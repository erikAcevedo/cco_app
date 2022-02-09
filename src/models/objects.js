const mongoose = require('mongoose');
const {Schema} = mongoose;
var ObjectId = Schema.ObjectId;

const CerveceroSchema = new Schema({
    name: String,
    dni: String,
    createDate: {type:Date, default: Date.now} 
});

const LugarSchema = new Schema({
    name: String,
    direccion: Object,
    idCervecero: ObjectId,
    createDate: {type:Date, default: Date.now} 
});

const ProductoSchema = new Schema({
    name: String,
    descrip: String,
    idCervecero: ObjectId,
    createDate: {type:Date, default: Date.now} 
});

const InventarioSchema = new Schema({
    idLugar: ObjectId,
    idProducto: ObjectId,
    idProveedor: ObjectId,
    count: Number,
    precio_compra: Number,
    precio_venta: Number,
    createDate: {type:Date, default: Date.now} 
});

const VentasSchema = new Schema({
    idInventario: ObjectId,
    count: Number,
    precio: Number,
    idCervecero: {type:ObjectId, default:null},
    createDate: {type:Date, default: Date.now} 
});

module.exports.cervecero = mongoose.model('cervecero', CerveceroSchema);
module.exports.producto = mongoose.model('producto', ProductoSchema);
module.exports.lugar = mongoose.model('lugar', LugarSchema);
module.exports.inventario = mongoose.model('inventario', InventarioSchema);