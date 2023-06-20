const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
    allowNull:false
    },
    height:{
      type:DataTypes.JSONB,
    allowNull:true
    },
    weight:{
      type:DataTypes.JSONB,
      allowNull:true
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:true
    }
  },{timestamps:false});
};
