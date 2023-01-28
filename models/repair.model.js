const { DataTypes } = require("sequelize");
const { db } = require("../dataBase/db");


const Repair = db.define('repair', {
  id:{
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  date:{
    type:DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendig',
    enum: ['pending', 'completed', 'cancelled']
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Repair