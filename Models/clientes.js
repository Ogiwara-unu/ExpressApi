const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('clientes', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  cedula: { 
    type: DataTypes.STRING(20), 
    allowNull: false, 
    unique: true 
  },
  nombre: { 
    type: DataTypes.STRING(100), 
    allowNull: false 
  }
}, { timestamps: false });

module.exports = Cliente;
