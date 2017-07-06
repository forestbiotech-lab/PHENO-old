/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Crop = sequelize.define('Crop', {
    id: { //Foreign Key: Species | and Obs table
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    commonCropName: { 
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  },{
    tableName: 'Crop',
    timestamps: false,
    underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

   classMethods: {
      associate: function associate(models) {     
        Crop.belongsTo(models.Species, {
          foreignKey: 'id',  //on Crop
        });
        Crop.belongsToMany(models.Germplasm, {
          through: models.Species,
          foreignKey: 'cropId',  //on species
        });
      }
    },
  });

  return Crop;
};

