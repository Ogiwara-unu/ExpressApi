const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clientes');

const Evento = sequelize.define('eventos', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  codigo: { 
    type: DataTypes.STRING(50), 
    allowNull: false, 
    unique: true 
  },
  descripcion: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  cliente_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: {
      model: Cliente,
      key: 'id'
    },
    onDelete: 'RESTRICT' 
  }
}, { timestamps: false });

Cliente.hasMany(Evento, { foreignKey: 'cliente_id' });
Evento.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Evento;
